"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Phone, Brain, Code, HeartHandshake } from "lucide-react"
import { cn } from "@/lib/utils"

const stepIcons = [Phone, Brain, Code, HeartHandshake]

const stepColors = [
  { accent: "text-[#FF6B4A]", bg: "bg-[#FFF0ED]" },
  { accent: "text-[#FFB547]", bg: "bg-[#FFF8E7]" },
  { accent: "text-[#7CB69D]", bg: "bg-[#F0F7F3]" },
  { accent: "text-[#FFAA8A]", bg: "bg-[#FFEDE6]" },
]

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export default function ProcessSection() {
  const t = useTranslations("process")

  return (
    <section className="bg-[#FDFAF6] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
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

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px md:left-1/2 md:block md:-translate-x-px">
            <div className="h-full w-0.5 bg-gradient-to-b from-[#FF6B4A] via-[#FFB547] to-[#7CB69D] opacity-30" />
          </div>

          {/* Mobile connecting line */}
          <div className="absolute left-8 top-0 bottom-0 block w-px md:hidden">
            <div className="h-full w-0.5 bg-gradient-to-b from-[#FF6B4A] via-[#FFB547] to-[#7CB69D] opacity-30" />
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-12 md:gap-16">
            {stepIcons.map((Icon, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className={cn(
                    "relative flex items-start gap-6",
                    "md:items-center md:gap-0",
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline dot - mobile */}
                  <div className="relative z-10 flex-shrink-0 md:hidden">
                    <div
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm",
                        stepColors[index].bg
                      )}
                    >
                      <Icon
                        className={cn("h-7 w-7", stepColors[index].accent)}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      "flex-1 md:w-[calc(50%-40px)]",
                      isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-3xl border border-[#F0EBE3] bg-white p-8",
                        "shadow-sm transition-all duration-300",
                        "hover:-translate-y-1 hover:shadow-md"
                      )}
                    >
                      <span
                        className={cn(
                          "text-4xl font-black tracking-tight",
                          stepColors[index].accent
                        )}
                      >
                        {t(`steps.${index}.number`)}
                      </span>
                      <h3 className="mt-3 text-xl font-bold text-[#1A1A1A] md:text-2xl">
                        {t(`steps.${index}.title`)}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[#6B6B6B] md:text-lg">
                        {t(`steps.${index}.description`)}
                      </p>
                    </div>
                  </div>

                  {/* Center dot - desktop */}
                  <div className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:flex">
                    <div
                      className={cn(
                        "flex h-16 w-16 items-center justify-center rounded-2xl shadow-md",
                        stepColors[index].bg
                      )}
                    >
                      <Icon
                        className={cn("h-7 w-7", stepColors[index].accent)}
                      />
                    </div>
                  </div>

                  {/* Spacer for the other side - desktop */}
                  <div className="hidden flex-1 md:block md:w-[calc(50%-40px)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
