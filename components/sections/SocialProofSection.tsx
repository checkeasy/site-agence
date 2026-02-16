"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonialColors = [
  { pill: "bg-[#FFF0ED] text-[#FF6B4A]", quote: "text-[#FF6B4A]" },
  { pill: "bg-[#FFF8E7] text-[#FFB547]", quote: "text-[#FFB547]" },
  { pill: "bg-[#F0F7F3] text-[#7CB69D]", quote: "text-[#7CB69D]" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function SocialProofSection() {
  const t = useTranslations("socialProof")

  const testimonialCount = 3
  const statCount = 4

  return (
    <section id="testimonials" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
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

        {/* Testimonial cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {Array.from({ length: testimonialCount }).map((_, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "flex flex-col rounded-3xl border border-[#F0EBE3] bg-white p-8",
                "shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-md"
              )}
            >
              {/* Quote icon */}
              <Quote
                className={cn(
                  "mb-4 h-8 w-8",
                  testimonialColors[index].quote
                )}
              />

              {/* Quote text */}
              <p className="flex-1 text-base italic leading-relaxed text-[#1A1A1A] md:text-lg">
                &ldquo;{t(`testimonials.${index}.quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-[#F0EBE3] pt-6">
                <p className="font-bold text-[#1A1A1A]">
                  {t(`testimonials.${index}.name`)}
                </p>
                <p className="mt-0.5 text-sm text-[#6B6B6B]">
                  {t(`testimonials.${index}.role`)} &middot;{" "}
                  {t(`testimonials.${index}.location`)}
                </p>
              </div>

              {/* Metric badge */}
              <div className="mt-4">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold",
                    testimonialColors[index].pill
                  )}
                >
                  {t(`testimonials.${index}.metric`)}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className={cn(
            "mt-16 rounded-3xl border border-[#F0EBE3] bg-[#FDFAF6] p-8 md:mt-20 md:p-12"
          )}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
            {Array.from({ length: statCount }).map((_, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                className={cn(
                  "flex flex-col items-center text-center",
                  index < statCount - 1 &&
                    "md:border-r md:border-[#F0EBE3]"
                )}
              >
                <span className="text-3xl font-black tracking-tight text-[#FF6B4A] md:text-4xl">
                  {t(`stats.${index}.value`)}
                </span>
                <span className="mt-2 text-sm text-[#6B6B6B] md:text-base">
                  {t(`stats.${index}.label`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
