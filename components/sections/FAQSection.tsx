"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FAQSection() {
  const t = useTranslations("faq")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqItems = [0, 1, 2, 3, 4, 5, 6].map((i) => ({
    question: t(`items.${i}.question`),
    answer: t(`items.${i}.answer`),
  }))

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#FDFAF6] py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
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
        </motion.div>

        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div
                className={cn(
                  "rounded-2xl border border-[#F0EBE3] bg-white p-6",
                  "shadow-sm transition-all duration-300",
                  openIndex === index && "shadow-md"
                )}
              >
                {/* Question */}
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-bold text-[#1A1A1A] md:text-lg">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-[#6B6B6B]" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                        opacity: { duration: 0.2, delay: 0.1 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-base leading-relaxed text-[#6B6B6B]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
