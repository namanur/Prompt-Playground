"use client";
import { motion } from "framer-motion";

export default function TokenPage() {
  return (
    <main className="min-h-screen py-16 px-6 mx-auto max-w-3xl">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6"
      >
        Token Utility
      </motion.h1>

      <p className="text-lg text-white/80 mb-8">
        Our token powers the Prompt Playground: access premium prompts, participate in governance,
        and unlock community rewards. Real utility for creators—not just a ticker.
      </p>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ui-card p-6"
        >
          <h2 className="text-xl font-semibold mb-2">🖼️ Premium Prompt Access</h2>
          <p className="text-white/70">
            Stake tokens to unlock curated 10/10 image prompts, cinematic styles, and advanced template packs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ui-card p-6"
        >
          <h2 className="text-xl font-semibold mb-2">🚀 Community Rewards</h2>
          <p className="text-white/70">
            Holders gain access to prompt drops, contests, and perks tied to marketplace revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="ui-card p-6"
        >
          <h2 className="text-xl font-semibold mb-2">🗳️ Governance</h2>
          <p className="text-white/70">
            Vote on new features, prompt pack priorities, and treasury initiatives—shape the product roadmap.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
