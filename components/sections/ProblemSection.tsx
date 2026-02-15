"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Table, Puzzle, Clock, Brain } from "lucide-react"
import { cn } from "@/lib/utils"

const icons = [Table, Puzzle, Clock, Brain]

const iconColors = [
  { bg: "bg-[#FFF0ED]", text: "text-[#FF6B4A]" },
  { bg: "bg-[#FFF8E7]", text: "text-[#FFB547]" },
  { bg: "bg-[#FFEDE6]", text: "text-[#FFAA8A]" },
  { bg: "bg-[#F0F7F3]", text: "text-[#7CB69D]" },
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

export default function ProblemSection() {
  const t = useTranslations("problem")

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
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {icons.map((Icon, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "rounded-3xl border border-[#F0EBE3] bg-white p-8",
                "shadow-sm transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-md"
              )}
            >
              <div
                className={cn(
                  "mb-5 flex h-14 w-14 items-center justify-center rounded-2xl",
                  iconColors[index].bg
                )}
              >
                <Icon className={cn("h-7 w-7", iconColors[index].text)} />
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] md:text-2xl">
                {t(`items.${index}.title`)}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#6B6B6B] md:text-lg">
                {t(`items.${index}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
