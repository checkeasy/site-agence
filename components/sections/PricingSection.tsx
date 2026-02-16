"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function PricingSection() {
  const t = useTranslations("pricing")

  const setupIncludes = t.raw("setup.includes") as string[]
  const monthlyIncludes = t.raw("monthly.includes") as string[]

  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF0ED] px-4 py-1.5 text-sm font-medium text-[#FF6B4A]">
            {t("badge")}
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6B6B6B]">
            {t("subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {/* Setup Card */}
          <motion.div
            variants={cardVariants}
            className={cn(
              "relative rounded-3xl border border-[#F0EBE3] bg-white p-8 md:p-10",
              "shadow-sm transition-all duration-300",
              "hover:-translate-y-1 hover:shadow-md"
            )}
          >
            <span className="inline-flex items-center rounded-full bg-[#F7F3ED] px-3 py-1 text-xs font-medium text-[#6B6B6B]">
              {t("setup.label")}
            </span>
            <div className="mt-6">
              <p className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
                {t("setup.price")}
              </p>
              <p className="mt-2 text-base text-[#6B6B6B]">
                {t("setup.description")}
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {setupIncludes.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7CB69D]" />
                  <span className="text-sm text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Monthly Card (Highlighted) */}
          <motion.div
            variants={cardVariants}
            className={cn(
              "relative rounded-3xl border-2 border-[#FF6B4A] bg-[#FFFBF9] p-8 md:p-10",
              "shadow-sm transition-all duration-300",
              "hover:-translate-y-1 hover:shadow-md"
            )}
          >
            <div className="absolute -top-3 right-6">
              <span className="inline-flex items-center rounded-full bg-[#FF6B4A] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {t("monthly.recommended")}
              </span>
            </div>
            <span className="inline-flex items-center rounded-full bg-[#FFF0ED] px-3 py-1 text-xs font-medium text-[#FF6B4A]">
              {t("monthly.label")}
            </span>
            <div className="mt-6">
              <p className="text-3xl font-bold tracking-tight text-[#1A1A1A] md:text-4xl">
                {t("monthly.price")}
              </p>
              <p className="mt-2 text-base text-[#6B6B6B]">
                {t("monthly.description")}
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {monthlyIncludes.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#7CB69D]" />
                  <span className="text-sm text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center justify-center rounded-2xl px-8 py-4",
              "bg-[#1A1A1A] text-base font-semibold text-white",
              "shadow-lg transition-all duration-300",
              "hover:bg-[#333] hover:shadow-xl",
              "active:scale-[0.98]"
            )}
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
