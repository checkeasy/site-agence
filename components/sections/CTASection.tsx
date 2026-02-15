"use client"

import { useState, type FormEvent } from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CTASection() {
  const t = useTranslations("ctaFinal")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClasses = cn(
    "w-full rounded-2xl border border-[#333] bg-[#2A2A2A] px-5 py-4",
    "text-white placeholder-[#777]",
    "outline-none transition-all duration-200",
    "focus:border-[#FF6B4A] focus:ring-2 focus:ring-[#FF6B4A]/30"
  )

  return (
    <section className="bg-[#1A1A1A] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-[#999]">
              {t("subtitle")}
            </p>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-[#333] bg-[#2A2A2A] p-12 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#7CB69D]/20">
                  <CheckCircle className="h-8 w-8 text-[#7CB69D]" />
                </div>
                <p className="text-xl font-semibold text-white">
                  {t("form.success")}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t("form.name")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder={t("form.email")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder={t("form.business")}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder={t("form.message")}
                    className={cn(inputClasses, "resize-none")}
                  />
                </div>
                <button
                  type="submit"
                  className={cn(
                    "mt-2 flex w-full items-center justify-center gap-3 rounded-2xl",
                    "bg-[#FF6B4A] px-8 py-4 text-base font-semibold text-white",
                    "transition-all duration-200",
                    "hover:bg-[#e85d3f] hover:shadow-lg hover:shadow-[#FF6B4A]/20",
                    "active:scale-[0.98]"
                  )}
                >
                  <Send className="h-5 w-5" />
                  {t("form.submit")}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
