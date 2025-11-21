"use client";

import React from "react";
import { NavbarDemo } from "@/components/navbar-demo";
import { motion } from "motion/react";
import { CheckCircle, Clock, Zap, Shield, Layout, MousePointerClick } from "lucide-react";

export default function BenefitsPage() {
  const benefits = [
    {
      title: "Stop Filling the Same Form Again and Again",
      description: "Students apply to 50, 100, or even 1000 internships or jobs. Every form asks the same questions. FormFiller removes that grind.",
      icon: <MousePointerClick className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Designed for Students Applying Everywhere",
      description: "Campus placements, internships, job portals, hackathon sign‑ups, research programs, and scholarship applications all demand repetitive information. Our tool solves a universal student problem.",
      icon: <Layout className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Your Data. Auto‑Filled. Anywhere.",
      description: "One‑time setup. Auto‑fill across any website. Zero re‑typing. Instant productivity boost.",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Save Hours Every Week During Placement Season",
      description: "Students know the struggle of filling 20–50 forms in a single week. FormFiller saves those hours.",
      icon: <Clock className="w-6 h-6 text-green-500" />,
    },
    {
      title: "Built for Speed During High‑Pressure Deadlines",
      description: "Many internship and job forms close quickly. FormFiller lets you apply faster and beat deadlines comfortably.",
      icon: <Zap className="w-6 h-6 text-red-500" />,
    },
    {
      title: "Perfect for Repetitive College Portals",
      description: "Works on Superset, Internshala, Naukri, company career pages, and one‑off Google Forms. Everything repetitive becomes single‑click.",
      icon: <CheckCircle className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Consistent, Error‑Free Applications",
      description: "No typos, no missing fields, no copy‑paste mistakes – perfect for serious students aiming for top companies.",
      icon: <Shield className="w-6 h-6 text-teal-500" />,
    },
    {
      title: "One Dashboard. All Your Answers.",
      description: "Store personal info, resume links, skills, projects, and answers to common questions in one place – reusable for every application.",
      icon: <Layout className="w-6 h-6 text-orange-500" />,
    },
    {
      title: "Stress‑Free Application Experience",
      description: "Placement season is stressful. FormFiller removes unnecessary friction, letting you focus on preparation.",
      icon: <CheckCircle className="w-6 h-6 text-pink-500" />,
    },
    {
      title: "Competitive Advantage in Mass Applications",
      description: "Apply to 200+ roles quickly – speed is an edge that gives you more interviews.",
      icon: <Zap className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Works Everywhere You Do",
      description: "Lightweight, privacy‑focused browser extension that works on any form.",
      icon: <Layout className="w-6 h-6 text-gray-500" />,
    },
    {
      title: "Get More Interviews by Applying Faster",
      description: "More applications = higher chance of callbacks, less burnout.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-50">
      <NavbarDemo />
      <div className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 tracking-tight">
            Built for Students Who Are Done <br className="hidden md:block" />
            Filling the Same Form 100 Times
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stop the grind. Automate your applications and focus on what matters—preparing for your interviews.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-neutral-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
