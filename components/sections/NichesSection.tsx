"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import {
  Wrench,
  Scissors,
  Building2,
  Heart,
  UtensilsCrossed,
  Hammer,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

const niches = [
  { icon: Wrench, color: { bg: "bg-[#FFF0ED]", text: "text-[#FF6B4A]" } },
  { icon: Scissors, color: { bg: "bg-[#FFF8E7]", text: "text-[#FFB547]" } },
  { icon: Building2, color: { bg: "bg-[#F0F7F3]", text: "text-[#7CB69D]" } },
  { icon: Heart, color: { bg: "bg-[#FFEDE6]", text: "text-[#FFAA8A]" } },
  { icon: UtensilsCrossed, color: { bg: "bg-[#FFF0ED]", text: "text-[#FF6B4A]" } },
  { icon: Hammer, color: { bg: "bg-[#FFF8E7]", text: "text-[#FFB547]" } },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
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

export default function NichesSection() {
  const t = useTranslations("niches")

  return (
    <section className="bg-[#FDFAF6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF8E7] px-4 py-1.5 text-sm font-medium text-[#FFB547]">
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
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
        >
          {niches.map(({ icon: Icon, color }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative rounded-3xl border border-[#F0EBE3] bg-white p-8",
                "shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-md"
              )}
            >
              <div
                className={cn(
                  "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl",
                  color.bg
                )}
              >
                <Icon className={cn("h-7 w-7", color.text)} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A]">
                {t(`items.${index}.title`)}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-[#6B6B6B]">
                {t(`items.${index}.description`)}
              </p>
              <div className="mt-4 flex items-center text-[#FF6B4A] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ArrowRight className="h-5 w-5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-[#6B6B6B]">
            {t("ctaAll")}{" "}
            <a
              href="#contact"
              className="font-medium text-[#FF6B4A] underline decoration-[#FF6B4A]/30 underline-offset-4 transition-colors hover:text-[#E55A3A] hover:decoration-[#FF6B4A]/60"
            >
              {t("cta")}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
