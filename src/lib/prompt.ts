export type Template = {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  preview: string;
  fields?: Array<{ key: string; label: string; placeholder?: string }>;
  prompt?: string;
};

export const EMAIL_TEMPLATES: Template[] = [
  {
    "id": "email-cold-outreach",
    "title": "Cold Outreach (Short)",
    "subtitle": "Personalized hook + value + soft CTA",
    "tags": [
      "email",
      "sales",
      "outreach"
    ],
    "preview": "https://picsum.photos/seed/emailCo/800/600",
    "prompt": "Write a tight cold outreach email. Include: subject, 2-sentence context tied to recipient, 1-sentence value prop with proof point, and a soft CTA with 2 time options.",
    "fields": [
      {
        "key": "recipient",
        "label": "Recipient / Company",
        "placeholder": "ACME Logistics"
      },
      {
        "key": "problem",
        "label": "Recipient Pain Point",
        "placeholder": "High WMS costs; slow pick/pack"
      },
      {
        "key": "value",
        "label": "Your Value / Proof",
        "placeholder": "Cut costs by 18% in 90 days; 120+ warehouses"
      },
      {
        "key": "cta",
        "label": "CTA",
        "placeholder": "15-min call Tue 4pm or Wed 11am?"
      },
      {
        "key": "sign",
        "label": "Signature Name",
        "placeholder": "Naman \u2014 Nandan Trader"
      }
    ]
  },
  {
    "id": "email-invoice-reminder",
    "title": "Invoice Reminder (Polite)",
    "subtitle": "Friendly nudge with details + link",
    "tags": [
      "email",
      "finance",
      "invoice"
    ],
    "preview": "https://picsum.photos/seed/emailInv/800/600",
    "prompt": "Draft a polite invoice reminder. Include: subject, invoice number/date/amount, payment link or instructions, and a warm thank-you. Keep it friendly and professional.",
    "fields": [
      {
        "key": "inv",
        "label": "Invoice # / Date / Amount",
        "placeholder": "#NT-2381 \u00b7 12 Aug \u00b7 \u20b926,520"
      },
      {
        "key": "link",
        "label": "Payment Link",
        "placeholder": "https://pay.link/abc"
      },
      {
        "key": "contact",
        "label": "Contact for Questions",
        "placeholder": "accounts@nandantrader.in"
      },
      {
        "key": "sign",
        "label": "Signature Name",
        "placeholder": "Naman \u2014 Accounts"
      }
    ]
  },
  {
    "id": "email-renewal-30",
    "title": "Renewal Reminder (30 days)",
    "subtitle": "Value recap + options + CTA",
    "tags": [
      "email",
      "success",
      "renewal"
    ],
    "preview": "https://picsum.photos/seed/emailRen/800/600",
    "prompt": "Write a 30\u2011day renewal reminder. Include: subject, quick value recap with 1-2 metrics, plan options (bullet list), and a CTA to confirm or schedule a review.",
    "fields": [
      {
        "key": "metric",
        "label": "Results Metric",
        "placeholder": "Uptime 99.95%; 24% faster SLA"
      },
      {
        "key": "plans",
        "label": "Plan Options",
        "placeholder": "Starter, Growth, Enterprise"
      },
      {
        "key": "cta",
        "label": "CTA",
        "placeholder": "Confirm renewal or book a review call"
      },
      {
        "key": "sign",
        "label": "Signature Name",
        "placeholder": "Naman \u2014 Customer Success"
      }
    ]
  },
  {
    "id": "email-security-notice",
    "title": "Security Incident Notice",
    "subtitle": "Plain-English, transparent, calm",
    "tags": [
      "email",
      "security",
      "legal"
    ],
    "preview": "https://picsum.photos/seed/emailSec/800/600",
    "prompt": "Draft a clear incident notice. Include: subject, brief what/when/impact, actions taken, steps users should take (if any), contact channel, and commitment to updates.",
    "fields": [
      {
        "key": "when",
        "label": "Date/Time",
        "placeholder": "21 Sep, 02:14 IST"
      },
      {
        "key": "impact",
        "label": "Impact Summary",
        "placeholder": "No customer data exfiltrated; 12 min downtime"
      },
      {
        "key": "steps",
        "label": "User Steps",
        "placeholder": "Rotate API keys; enable MFA"
      },
      {
        "key": "contact",
        "label": "Security Contact",
        "placeholder": "security@company.com"
      }
    ]
  },
  {
    "id": "email-partnership-pitch",
    "title": "Partnership Pitch",
    "subtitle": "Mutual value + proposed next step",
    "tags": [
      "email",
      "bd",
      "partnership"
    ],
    "preview": "https://picsum.photos/seed/emailPart/800/600",
    "prompt": "Write a partnership pitch. Include: subject, 1-line why-us/why-now, 3 bullets of mutual value, and a CTA proposing a 20\u2011min call next week.",
    "fields": [
      {
        "key": "why",
        "label": "Why Us / Why Now",
        "placeholder": "Complementary audiences; Q4 launch"
      },
      {
        "key": "value",
        "label": "Mutual Value Bullets",
        "placeholder": "Co-marketing; bundle pricing; referral fees"
      },
      {
        "key": "cta",
        "label": "CTA",
        "placeholder": "20\u2011min call next week?"
      }
    ]
  }
];
export const WRITING_TEMPLATES: Template[] = [
  {
    "id": "writing-01",
    "title": "Writing Template #1",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write1/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-02",
    "title": "Writing Template #2",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write2/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-03",
    "title": "Writing Template #3",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write3/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-04",
    "title": "Writing Template #4",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write4/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-05",
    "title": "Writing Template #5",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write5/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-06",
    "title": "Writing Template #6",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write6/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-07",
    "title": "Writing Template #7",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write7/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-08",
    "title": "Writing Template #8",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write8/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-09",
    "title": "Writing Template #9",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write9/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-10",
    "title": "Writing Template #10",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write10/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-11",
    "title": "Writing Template #11",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write11/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-12",
    "title": "Writing Template #12",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write12/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-13",
    "title": "Writing Template #13",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write13/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-14",
    "title": "Writing Template #14",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write14/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-15",
    "title": "Writing Template #15",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write15/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-16",
    "title": "Writing Template #16",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write16/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-17",
    "title": "Writing Template #17",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write17/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-18",
    "title": "Writing Template #18",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write18/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-19",
    "title": "Writing Template #19",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write19/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-20",
    "title": "Writing Template #20",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write20/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-21",
    "title": "Writing Template #21",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write21/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-22",
    "title": "Writing Template #22",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write22/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-23",
    "title": "Writing Template #23",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write23/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-24",
    "title": "Writing Template #24",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write24/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-25",
    "title": "Writing Template #25",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write25/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-26",
    "title": "Writing Template #26",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write26/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-27",
    "title": "Writing Template #27",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write27/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-28",
    "title": "Writing Template #28",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write28/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-29",
    "title": "Writing Template #29",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write29/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-30",
    "title": "Writing Template #30",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write30/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-31",
    "title": "Writing Template #31",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write31/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-32",
    "title": "Writing Template #32",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write32/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-33",
    "title": "Writing Template #33",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write33/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-34",
    "title": "Writing Template #34",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write34/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-35",
    "title": "Writing Template #35",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write35/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-36",
    "title": "Writing Template #36",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write36/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-37",
    "title": "Writing Template #37",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write37/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-38",
    "title": "Writing Template #38",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write38/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-39",
    "title": "Writing Template #39",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write39/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-40",
    "title": "Writing Template #40",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write40/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-41",
    "title": "Writing Template #41",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write41/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-42",
    "title": "Writing Template #42",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write42/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-43",
    "title": "Writing Template #43",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write43/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-44",
    "title": "Writing Template #44",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write44/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-45",
    "title": "Writing Template #45",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write45/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-46",
    "title": "Writing Template #46",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write46/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-47",
    "title": "Writing Template #47",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write47/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-48",
    "title": "Writing Template #48",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write48/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-49",
    "title": "Writing Template #49",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write49/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-50",
    "title": "Writing Template #50",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write50/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-51",
    "title": "Writing Template #51",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write51/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-52",
    "title": "Writing Template #52",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write52/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-53",
    "title": "Writing Template #53",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write53/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-54",
    "title": "Writing Template #54",
    "subtitle": "social thread",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write54/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-55",
    "title": "Writing Template #55",
    "subtitle": "press note",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write55/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-56",
    "title": "Writing Template #56",
    "subtitle": "blog intro",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write56/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-57",
    "title": "Writing Template #57",
    "subtitle": "how-to outline",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write57/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-58",
    "title": "Writing Template #58",
    "subtitle": "case study section",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write58/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-59",
    "title": "Writing Template #59",
    "subtitle": "landing hero",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write59/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  },
  {
    "id": "writing-60",
    "title": "Writing Template #60",
    "subtitle": "ad copy",
    "tags": [
      "writing",
      "content"
    ],
    "preview": "https://picsum.photos/seed/write60/800/600",
    "prompt": "Generate well-structured prose for the given goal. Include a hook, clear sections, and a crisp close.",
    "fields": [
      {
        "key": "topic",
        "label": "Topic",
        "placeholder": "Main subject"
      },
      {
        "key": "aud",
        "label": "Audience",
        "placeholder": "Who is it for?"
      }
    ]
  }
];
export const IMAGE_TEMPLATES: Template[] = [
  {
    "id": "image-01",
    "title": "Image Template #1",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image1/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-02",
    "title": "Image Template #2",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image2/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-03",
    "title": "Image Template #3",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image3/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-04",
    "title": "Image Template #4",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image4/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-05",
    "title": "Image Template #5",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image5/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-06",
    "title": "Image Template #6",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image6/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-07",
    "title": "Image Template #7",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image7/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-08",
    "title": "Image Template #8",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image8/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-09",
    "title": "Image Template #9",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image9/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-10",
    "title": "Image Template #10",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image10/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-11",
    "title": "Image Template #11",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image11/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-12",
    "title": "Image Template #12",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image12/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-13",
    "title": "Image Template #13",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image13/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-14",
    "title": "Image Template #14",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image14/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-15",
    "title": "Image Template #15",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image15/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-16",
    "title": "Image Template #16",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image16/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-17",
    "title": "Image Template #17",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image17/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-18",
    "title": "Image Template #18",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image18/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-19",
    "title": "Image Template #19",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image19/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-20",
    "title": "Image Template #20",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image20/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-21",
    "title": "Image Template #21",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image21/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-22",
    "title": "Image Template #22",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image22/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-23",
    "title": "Image Template #23",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image23/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-24",
    "title": "Image Template #24",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image24/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-25",
    "title": "Image Template #25",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image25/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-26",
    "title": "Image Template #26",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image26/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-27",
    "title": "Image Template #27",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image27/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-28",
    "title": "Image Template #28",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image28/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-29",
    "title": "Image Template #29",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image29/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-30",
    "title": "Image Template #30",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image30/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-31",
    "title": "Image Template #31",
    "subtitle": "noir portrait",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image31/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-32",
    "title": "Image Template #32",
    "subtitle": "manga panel",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image32/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-33",
    "title": "Image Template #33",
    "subtitle": "landscape poster",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image33/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-34",
    "title": "Image Template #34",
    "subtitle": "UI mock banner",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image34/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  },
  {
    "id": "image-35",
    "title": "Image Template #35",
    "subtitle": "product 4:3",
    "tags": [
      "image",
      "design"
    ],
    "preview": "https://picsum.photos/seed/image35/800/600",
    "prompt": "High-quality, well-lit composition. Add details as needed. Respect given aspect ratio 4:3.",
    "fields": [
      {
        "key": "subject",
        "label": "Subject",
        "placeholder": "What is in frame?"
      },
      {
        "key": "style",
        "label": "Style",
        "placeholder": "photoreal / manga / noir / studio"
      }
    ]
  }
];

export const BASE_TEMPLATES = {
  emails: EMAIL_TEMPLATES,
  writing: WRITING_TEMPLATES,
  images: IMAGE_TEMPLATES
};


export function assemblePrompt({
  activeTab,  // "images" | "writing" | "emails"
  builder,
  quality,
  seed,
  tone,
  complexity,
  length,
  audience,
  industry,
  format,
  hasAttachment,      // NEW
  extraPresetText     // NEW
}: {
  activeTab: "images" | "writing" | "emails";
  builder: any;
  quality?: number;
  seed?: string | number;
  tone?: string;
  complexity?: string;
  length?: string;
  audience?: string;
  industry?: string;
  format?: string;
  hasAttachment?: boolean;
  extraPresetText?: string;
}) {
  const t = builder?.template as Template | undefined;
  if (!t) return "";

  const userBits =
    t.fields?.map((f) => builder.values?.[f.key]).filter(Boolean).join(", ") || "";

  const base = t.prompt || `${t.title} — ${t.subtitle ?? "template"}`;

  // Mode envelope based on tab (keeps your arrays unchanged)
  const modeHeader =
    activeTab === "emails"
      ? "TASK: Write a professional EMAIL.\nOUTPUT: Provide a 'Subject:' line and an email body only.\nDO NOT include image prompts, lenses, or [aspect]/[seed] tokens."
      : activeTab === "writing"
      ? "TASK: Write structured PROSE only.\nOUTPUT: Plain text (no prompt tokens or camera specs)."
      : "TASK: Write an IMAGE-GENERATION PROMPT only.\nOUTPUT: A single prompt string; no explanations, no email/prose.";

  // Image-only options (keep as you had)
  const imageOpts =
    activeTab === "images"
      ? `[quality:${quality ?? 8}/10] [seed:${seed ?? "auto"}] [aspect:4:3]`
      : "";

  // Universal soft controls (work with all three modes)
  const controls = `[Tone:${tone ?? "neutral"}] [Complexity:${complexity ?? "medium"}] [Length:${length ?? "medium"}] [Audience:${audience ?? "general"}] [Industry:${industry ?? "general"}] [Format:${format ?? activeTab}]`;

  // FaceLock guidance when a real image is attached (baked-in here to avoid another import)
  const faceLock =
    activeTab === "images" && hasAttachment
      ? `
# FACELOCK (reference face attached)
- Preserve the person’s exact identity and facial structure (no age/eye/skin tone/jawline change).
- No face-swaps, morphing, cartoonification, or beautification filters.
- Maintain skin texture, moles/scars/freckles, and hairstyle silhouette.
- Match perspective/focal length for realism; avoid plastic skin and AI artifacts.
- If realism conflicts with style, choose realism.`
      : "";

  // Negatives to fight artifacts (images only)
  const negatives =
    activeTab === "images"
      ? `
NEGATIVE:
- No extra fingers/hands/limbs; no warped anatomy.
- No plastic skin; avoid excessive smoothing or doll eyes.
- No identity changes when a reference face is present.`
      : "";

  // Optional Pose/composition preset (images only)
  const extras =
    activeTab === "images" && extraPresetText ? `\n${extraPresetText}` : "";

  return [
    modeHeader,
    `\nTITLE: ${t.title}`,
    `\nINSTRUCTIONS: ${base}`,
    userBits ? `\nDETAILS: ${userBits}` : "",
    imageOpts ? `\n${imageOpts}` : "",
    `\n${controls}`,
    faceLock,
    negatives,
    extras
  ].join("");
}
