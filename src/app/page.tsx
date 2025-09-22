"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Zap, Target, ArrowRight, Play } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl px-6 pt-24 pb-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-6"
          >
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-sm">AI-Powered Prompt Engineering</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
            Prompt Playground
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            Craft <strong>10/10</strong> image prompts—consistent, clear, and art-director approved.
            Thumbnails stay 4:3 in the grid; generated images can be any aspect you want.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/studio"
              className="group px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all inline-flex items-center justify-center gap-2"
            >
              <Play size={16} />
              Open Studio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/token"
              className="px-6 py-3 rounded-lg border border-white/40 hover:border-white/60 transition-colors text-center"
            >
              Token Info
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              Schema-locked structure
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              90+ quality scores
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              Any aspect ratio
            </div>
          </motion.div>
        </motion.div>

        {/* Background stays under content & doesn't block clicks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background: `
              radial-gradient(600px 300px at 50% 0%, rgba(255,255,255,0.08), transparent 60%),
              radial-gradient(400px 200px at 20% 80%, rgba(59,130,246,0.05), transparent 50%),
              radial-gradient(300px 150px at 80% 20%, rgba(168,85,247,0.05), transparent 50%)
            `,
          }}
        />
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-medium mb-2"
        >
          Why it&apos;s better
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 mb-8"
        >
          Built for professionals who need consistent, high-quality results.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Zap className="text-yellow-400" size={24} />,
              title: "Two-Pass Quality",
              desc: "Generator + Art Director ensures ≥90/100 scores",
              color: "border-yellow-400/20 bg-yellow-400/5",
            },
            {
              icon: <Target className="text-blue-400" size={24} />,
              title: "Schema-Locked",
              desc:
                "Always includes subject, environment, style, camera, lighting, composition, post, negatives",
              color: "border-blue-400/20 bg-blue-400/5",
            },
            {
              icon: <Sparkles className="text-purple-400" size={24} />,
              title: "Free Aspect",
              desc:
                "Thumbnails are 4:3 only in the grid; generation aspect is your choice",
              color: "border-purple-400/20 bg-purple-400/5",
            },
          ].map(({ icon, title, desc, color }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.08 * i }}
              className={`rounded-xl border p-5 ${color}`}
            >
              <div className="flex items-center gap-2">
                {icon}
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-white/70 mt-2">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
