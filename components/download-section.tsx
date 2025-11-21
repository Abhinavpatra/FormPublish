"use client";
import { motion } from "motion/react";
import { Download } from "lucide-react";

export function DownloadSection() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center bg-white text-neutral-900 border-t border-neutral-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Get the Extension Now
        </h2>
        <p className="text-neutral-600 max-w-lg mx-auto">
          Boost your productivity with our intelligent form filler. Download the zip, unpack it, and load it into Chrome.
        </p>
        <a
          href="/extension.zip"
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-neutral-800 transition-colors"
        >
          <Download className="w-5 h-5" />
          Download Extension
        </a>
      </motion.div>
    </section>
  );
}
