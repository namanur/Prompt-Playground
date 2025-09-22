'use client';

import React, { useMemo, useState, useRef } from 'react';
import { BASE_TEMPLATES, assemblePrompt, type Template } from '@/lib/prompt';
import { PEOPLE_POSE_PRESETS } from '@/lib/presets';
import { detectIntent } from '@/lib/intent';
import {
  validateEmailOutput,
  validateWritingOutput,
  validateImageOutput,
} from '@/lib/validate';
import { Star, Search, ArrowUp } from 'lucide-react';
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';

type Locked = 'images' | 'writing' | 'emails';
const TABS: (keyof typeof BASE_TEMPLATES)[] = ['images', 'writing', 'emails'];

type PromptResult = {
  subject: string;
  environment: string;
  style: string;
  lighting: string;
  camera: string;
  composition: string;
  postprocess: string;
  negatives: string;
  final_prompt: string;
  score: number;
  technical_params?: { steps?: number; cfg_scale?: number; sampler?: string };
};

export default function StudioTabsClient({ lockedTab }: { lockedTab?: Locked }) {
  const builderRef = useRef<HTMLDivElement>(null);

  // tab mode
  const [tab, setTab] = useState<keyof typeof BASE_TEMPLATES>(lockedTab ?? 'images');
  const isImage = (lockedTab ?? tab) === 'images';

  // search + favorites
  const [q, setQ] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const list = BASE_TEMPLATES[tab];
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    return list.filter(t =>
      !s || (t.title + ' ' + (t.subtitle || '') + ' ' + t.tags.join(' ')).toLowerCase().includes(s)
    );
  }, [list, q]);

  // builder
  const [builder, setBuilder] = useState<{ template?: Template; values: Record<string, string> }>({ values: {} });

  // meta controls
  const [quality, setQuality] = useState(7);
  const [seed, setSeed] = useState('auto');
  const [tone, setTone] = useState('professional');
  const [complexity, setComplexity] = useState('intermediate');
  const [length, setLength] = useState('detailed');
  const [audience, setAudience] = useState('general');
  const [industry, setIndustry] = useState('general');
  const [format, setFormat] = useState('paragraph');
  const [aspect, setAspect] = useState('free');

  // NEW: reference-face lock (no upload UI)
  const [hasRefFace, setHasRefFace] = useState(false);

  // POSE FIX: keep '' in state for "no pose", but never pass '' to <Select/>.
  const NONE = 'NONE';
  const [pose, setPose] = useState<keyof typeof PEOPLE_POSE_PRESETS | ''>('');

  // optimizer state
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [optimized, setOptimized] = useState('');
  const [rich, setRich] = useState<PromptResult | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // assembled prompt (FaceLock + Pose included)
  const assembled = assemblePrompt({
    activeTab: tab,
    builder,
    quality,
    seed,
    tone,
    complexity,
    length,
    audience,
    industry,
    format,
    hasAttachment: hasRefFace, // checkbox drives FaceLock text
    extraPresetText: pose ? PEOPLE_POSE_PRESETS[pose] : ''
  });

  function onUse(t: Template) {
    setBuilder({ template: t, values: {} });
    setTimeout(() => builderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  function toggleFavorite(id: string) {
    setFavorites(f => (f.includes(id) ? f.filter(x => x !== id) : [...f, id]));
  }

  function qualityToTag(n: number) {
    if (n >= 9) return '9/10';
    if (n >= 8) return '8/10';
    if (n >= 7) return '7/10';
    if (n >= 6) return '6/10';
    return `${Math.max(1, Math.min(10, n))}/10`;
  }

  async function optimize() {
    if (!builder.template) {
      setErr('Pick a template first.');
      return;
    }

    // Intent detection (suggest switching page if unlocked)
    const intentSample = [
      builder.template?.title,
      builder.template?.subtitle,
      Object.values(builder.values || {}).join(' ')
    ].join(' ');
    const intent = detectIntent(intentSample, hasRefFace);
    const intentTab = intent === 'image' ? 'images' : intent === 'writing' ? 'writing' : 'emails';
    if (!lockedTab && intentTab !== tab) {
      const ok = window.confirm(`This looks like a ${intent} request. Switch to /studio/${intentTab}?`);
      if (ok) {
        setTab(intentTab as any);
        return;
      }
    }

    setErr(null);
    setLoading(true);
    setOptimized('');
    setRich(null);

    try {
      const r = await fetch('/api/generate-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userIdea: assembled,
          aspect,
          quality: qualityToTag(quality),
          seed: seed || 'auto',
          mode: (lockedTab ?? tab)
        })
      });
      const j = await r.json();
      if (!r.ok || !j?.success) throw new Error(j?.error || 'Optimize failed');

      const result: PromptResult = j.result;
      setOptimized(result.final_prompt);
      setRich(result);
      setShowDetails(true);

      const vErr =
        isImage
          ? validateImageOutput(result.final_prompt)
          : tab === 'emails'
            ? validateEmailOutput(result.final_prompt)
            : validateWritingOutput(result.final_prompt);

      if (vErr) setErr(vErr);
    } catch (e: any) {
      setErr(e?.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  function scoreBadgeColor(score?: number) {
    if (!score && score !== 0) return 'text-white/80 bg-white/10 border-white/20';
    if (score >= 95) return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
    if (score >= 90) return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
    if (score >= 80) return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    return 'text-red-400 bg-red-400/10 border-red-400/20';
  }

  return (
    <div className="container py-10">
      {/* Header with tabs */}
      <div className="flex flex-col gap-4 items-center mb-8">
        <h1 className="text-3xl font-semibold">Prompt Playground Studio</h1>

        {!lockedTab && (
          <div className="flex gap-6 border-b border-white/10">
            {TABS.map(t => (
              <button
                key={t}
                onClick={() => { if (!lockedTab) setTab(t); }}
                className={`pb-2 px-2 text-sm font-medium transition-colors ${
                  tab === t ? 'text-white border-b-2 border-blue-500' : 'text-white/60 hover:text-white'
                }`}
              >
                {t[0].toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        )}

        <div className="relative w-full max-w-lg">
          <Search className="absolute left-3 top-3 text-white/50" size={18} />
          <input
            className="ui-input pl-9"
            placeholder="Search templates… (images, writing, emails)"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
        </div>
      </div>

      {/* Template grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(t => (
          <div
            key={t.id}
            className="ui-card overflow-hidden group relative hover:shadow-lg transition-shadow"
          >
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img src={t.preview} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <div className="p-3 space-y-1">
              <p className="font-medium">{t.title}</p>
              <p className="text-xs text-white/70 line-clamp-2">{t.subtitle}</p>
              <div className="flex justify-between items-center mt-2">
                <button className="ui-btn" onClick={() => onUse(t)}>Use</button>
                <button onClick={() => toggleFavorite(t.id)}>
                  <Star
                    size={18}
                    className={favorites.includes(t.id) ? 'text-yellow-400 fill-yellow-400' : 'text-white/40'}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Builder + Optimizer */}
      <div ref={builderRef} className="ui-card p-4 mt-12">
        {!builder.template ? (
          <p className="text-white/75">Pick a template to start editing and optimizing.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Left: controls */}
            <div className="space-y-3">
              <div className="w-full rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={builder.template.preview}
                  alt={builder.template.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {builder.template.fields?.map(f => (
                <div key={f.key}>
                  <label className="ui-label">{f.label}</label>
                  <input
                    className="ui-input mt-1"
                    placeholder={f.placeholder}
                    value={builder.values[f.key] ?? ''}
                    onChange={e =>
                      setBuilder(b => ({ ...b, values: { ...b.values, [f.key]: e.target.value } }))
                    }
                  />
                </div>
              ))}

              {/* Reference identity lock (no upload) */}
              {isImage && (
                <div className="ui-card p-3 space-y-3">
                  <label className="ui-label flex items-center gap-2">
                    <Checkbox
                      checked={hasRefFace}
                      onCheckedChange={(v) => setHasRefFace(Boolean(v))}
                    />
                    I will use a reference photo — <span className="text-white/70">lock the face identity</span>
                  </label>
                  {hasRefFace && <Badge>FaceLock ON — identity preserved</Badge>}

                  <div>
                    <label className="ui-label">Pose preset (optional)</label>
                    {/* POSE FIX: never pass '' to Select; map '' <-> 'NONE' */}
                    <Select
                      value={pose || NONE}
                      onValueChange={(v) => setPose(v === NONE ? '' : (v as keyof typeof PEOPLE_POSE_PRESETS))}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a pose" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value={NONE}>— none —</SelectItem>
                        <SelectItem value="HUG">Hug</SelectItem>
                        <SelectItem value="SIDE_HUG">Side Hug</SelectItem>
                        <SelectItem value="OVER_SHOULDER">Over-shoulder</SelectItem>
                        <SelectItem value="WALKING_TOGETHER">Walking together</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Meta controls */}
              <div className="grid grid-cols-2 gap-3">
                {/* Tone */}
                <div>
                  <label className="ui-label">Tone</label>
                  <Select value={tone} onValueChange={(v) => setTone(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Tone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="casual">Casual</SelectItem>
                      <SelectItem value="persuasive">Persuasive</SelectItem>
                      <SelectItem value="friendly">Friendly</SelectItem>
                      <SelectItem value="authoritative">Authoritative</SelectItem>
                      <SelectItem value="playful">Playful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Complexity */}
                <div>
                  <label className="ui-label">Complexity</label>
                  <Select value={complexity} onValueChange={(v) => setComplexity(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Complexity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Length */}
                <div>
                  <label className="ui-label">Length</label>
                  <Select value={length} onValueChange={(v) => setLength(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="concise">Concise</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="detailed">Detailed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Audience */}
                <div>
                  <label className="ui-label">Audience</label>
                  <Select value={audience} onValueChange={(v) => setAudience(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="experts">Experts</SelectItem>
                      <SelectItem value="beginners">Beginners</SelectItem>
                      <SelectItem value="executives">Executives</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Industry */}
                <div>
                  <label className="ui-label">Industry</label>
                  <Select value={industry} onValueChange={(v) => setIndustry(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="creative">Creative</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Format */}
                <div>
                  <label className="ui-label">Format</label>
                  <Select value={format} onValueChange={(v) => setFormat(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="paragraph">Paragraph</SelectItem>
                      <SelectItem value="bullet">Bulleted</SelectItem>
                      <SelectItem value="outline">Outline</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="tweet">Tweet</SelectItem>
                      <SelectItem value="script">Script</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Aspect */}
                <div>
                  <label className="ui-label">Aspect</label>
                  <Select value={aspect} onValueChange={(v) => setAspect(v)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Aspect" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="1:1">1:1</SelectItem>
                      <SelectItem value="4:3">4:3</SelectItem>
                      <SelectItem value="3:2">3:2</SelectItem>
                      <SelectItem value="16:9">16:9</SelectItem>
                      <SelectItem value="9:16">9:16</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quality */}
                <div>
                  <label className="ui-label">Quality ({quality}/10)</label>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    step={1}
                    className="w-full mt-2"
                    value={quality}
                    onChange={(e) => setQuality(Number(e.target.value))}
                  />
                </div>

                {/* Seed */}
                <div>
                  <label className="ui-label">Seed</label>
                  <input
                    className="ui-input mt-1"
                    placeholder="auto or number"
                    value={seed}
                    onChange={(e) => setSeed(e.target.value)}
                  />
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  className="ui-btn"
                  onClick={optimize}
                  disabled={loading}
                >
                  <ArrowUp className="mr-1" size={16} />
                  {loading ? 'Optimizing…' : 'Optimize'}
                </button>
                {err && <span className="text-red-400 text-sm">{err}</span>}
              </div>
            </div>

            {/* Right: output */}
            <div className="space-y-3">
              <label className="ui-label">Assembled input (preview)</label>
              <textarea
                className="ui-textarea h-32"
                value={assembled}
                readOnly
              />

              <label className="ui-label">Optimized prompt</label>
              <textarea
                className="ui-textarea h-56"
                value={optimized}
                readOnly
                placeholder="Run Optimize to generate the final prompt…"
              />

              {rich && showDetails && (
                <div className="ui-card p-3 space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Quality Score</p>
                    <span className={`px-2 py-1 rounded-md border text-xs ${scoreBadgeColor(rich.score)}`}>
                      {rich.score ?? 'N/A'}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-white/60">Subject:</span> {rich.subject || '—'}</div>
                    <div><span className="text-white/60">Environment:</span> {rich.environment || '—'}</div>
                    <div><span className="text-white/60">Style:</span> {rich.style || '—'}</div>
                    <div><span className="text-white/60">Lighting:</span> {rich.lighting || '—'}</div>
                    <div><span className="text-white/60">Camera:</span> {rich.camera || '—'}</div>
                    <div><span className="text-white/60">Composition:</span> {rich.composition || '—'}</div>
                    <div className="col-span-2">
                      <span className="text-white/60">Post-process:</span> {rich.postprocess || '—'}
                    </div>
                    <div className="col-span-2">
                      <span className="text-white/60">Negatives:</span> {rich.negatives || '—'}
                    </div>
                  </div>

                  {!!rich.technical_params && (
                    <div className="text-xs text-white/70 pt-1">
                      {typeof rich.technical_params.steps === 'number' && <span className="mr-3">steps: {rich.technical_params.steps}</span>}
                      {typeof rich.technical_params.cfg_scale === 'number' && <span className="mr-3">cfg: {rich.technical_params.cfg_scale}</span>}
                      {rich.technical_params.sampler && <span>sampler: {rich.technical_params.sampler}</span>}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
