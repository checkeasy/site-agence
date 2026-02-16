"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight, Star, TrendingUp, Users, Calendar, BarChart3, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: { repeat: Infinity, duration: 5, ease: "easeInOut" },
  },
}

const floatVariantSlow = {
  initial: { y: 0 },
  animate: {
    y: [4, -8, 4],
    transition: { repeat: Infinity, duration: 7, ease: "easeInOut" },
  },
}

/* ------------------------------------------------------------------ */
/*  Highlighted keyword helper                                         */
/* ------------------------------------------------------------------ */

function HighlightedLine({
  text,
  keywords,
}: {
  text: string
  keywords: string[]
}) {
  const keyword = keywords.find((kw) => text.toLowerCase().includes(kw.toLowerCase()))
  if (!keyword) return <span>{text}</span>

  const idx = text.toLowerCase().indexOf(keyword.toLowerCase())
  const before = text.slice(0, idx)
  const match = text.slice(idx, idx + keyword.length)
  const after = text.slice(idx + keyword.length)

  return (
    <span>
      {before}
      <span
        className="inline-block"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontStyle: "italic" }}
      >
        {match}
      </span>
      {after}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/*  Floating dashboard mockup (right side)                             */
/* ------------------------------------------------------------------ */

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6B4A]/10 via-[#FFB547]/10 to-[#FFAA8A]/5 blur-3xl scale-110" />

      {/* Main card -- Revenue overview */}
      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        className="absolute top-[8%] left-[4%] w-[68%] bg-white rounded-3xl border border-[#F0EBE3] shadow-lg p-5 z-20"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#FFF0ED] flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-[#FF6B4A]" />
            </span>
            <span className="text-xs font-semibold text-[#1A1A1A]">Chiffre d&apos;affaires</span>
          </div>
          <span className="text-[10px] font-medium text-[#7CB69D] bg-[#F0F7F3] px-2 py-0.5 rounded-full">
            +24%
          </span>
        </div>
        {/* Bar chart rows */}
        <div className="flex items-end gap-1.5 h-16">
          {[40, 55, 35, 70, 60, 85, 78, 92, 68, 88, 95, 80].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-md"
              style={{
                height: `${h}%`,
                background:
                  i >= 9
                    ? "linear-gradient(to top, #FF6B4A, #FFAA8A)"
                    : "#F0EBE3",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.6 + i * 0.04, duration: 0.5, ease: "backOut" }}
            />
          ))}
        </div>
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-lg font-bold text-[#1A1A1A]">12 480 &euro;</span>
          <span className="text-[10px] text-[#9B9B9B]">ce mois</span>
        </div>
      </motion.div>

      {/* Clients card */}
      <motion.div
        variants={floatVariantSlow}
        initial="initial"
        animate="animate"
        className="absolute top-[4%] right-[2%] w-[38%] bg-white rounded-2xl border border-[#F0EBE3] shadow-md p-4 z-30"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-lg bg-[#FFF8E7] flex items-center justify-center">
            <Users className="w-3.5 h-3.5 text-[#FFB547]" />
          </span>
          <span className="text-[10px] font-semibold text-[#1A1A1A]">Clients</span>
        </div>
        {/* Avatar stack */}
        <div className="flex -space-x-2 mb-2">
          {["#FF6B4A", "#FFB547", "#FFAA8A", "#7CB69D", "#9B9B9B"].map((color, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white"
              style={{ backgroundColor: color, zIndex: 5 - i }}
            >
              {["M", "S", "K", "L", "A"][i]}
            </div>
          ))}
          <div className="w-7 h-7 rounded-full border-2 border-white bg-[#F7F3ED] flex items-center justify-center text-[8px] font-medium text-[#6B6B6B] z-0">
            +8
          </div>
        </div>
        <span className="text-xs font-bold text-[#1A1A1A]">47</span>
        <span className="text-[10px] text-[#9B9B9B] ml-1">actifs</span>
      </motion.div>

      {/* Calendar widget */}
      <motion.div
        variants={floatVariant}
        initial="initial"
        animate="animate"
        className="absolute bottom-[18%] right-[0%] w-[44%] bg-white rounded-2xl border border-[#F0EBE3] shadow-md p-4 z-30"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-lg bg-[#FFF0ED] flex items-center justify-center">
            <Calendar className="w-3.5 h-3.5 text-[#FF6B4A]" />
          </span>
          <span className="text-[10px] font-semibold text-[#1A1A1A]">Agenda</span>
        </div>
        {/* Mini event rows */}
        <div className="space-y-1.5">
          {[
            { time: "9h00", label: "Rdv - M. Dupont", color: "#FF6B4A" },
            { time: "11h30", label: "Devis #412", color: "#FFB547" },
            { time: "14h00", label: "Livraison chantier", color: "#7CB69D" },
          ].map((ev, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className="w-1 h-6 rounded-full flex-shrink-0"
                style={{ backgroundColor: ev.color }}
              />
              <div className="min-w-0">
                <p className="text-[9px] text-[#9B9B9B]">{ev.time}</p>
                <p className="text-[10px] font-medium text-[#1A1A1A] truncate">{ev.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Task completion mini-card */}
      <motion.div
        variants={floatVariantSlow}
        initial="initial"
        animate="animate"
        className="absolute bottom-[6%] left-[8%] w-[52%] bg-white rounded-2xl border border-[#F0EBE3] shadow-md p-4 z-20"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 rounded-lg bg-[#F0F7F3] flex items-center justify-center">
            <BarChart3 className="w-3.5 h-3.5 text-[#7CB69D]" />
          </span>
          <span className="text-[10px] font-semibold text-[#1A1A1A]">Productivite</span>
        </div>
        {/* Progress items */}
        <div className="space-y-2">
          {[
            { label: "Devis envoyes", pct: 85, color: "#FF6B4A" },
            { label: "Factures payees", pct: 72, color: "#FFB547" },
            { label: "Taches terminees", pct: 94, color: "#7CB69D" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[9px] text-[#6B6B6B]">{item.label}</span>
                <span className="text-[9px] font-semibold text-[#1A1A1A]">{item.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-[#F7F3ED] overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${item.pct}%` }}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Small floating notification */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
        className="absolute top-[52%] left-[-2%] bg-white rounded-xl border border-[#F0EBE3] shadow-md px-3 py-2 flex items-center gap-2 z-40"
      >
        <span className="w-6 h-6 rounded-lg bg-[#F0F7F3] flex items-center justify-center">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#7CB69D]" />
        </span>
        <span className="text-[10px] font-medium text-[#1A1A1A]">Nouveau client !</span>
      </motion.div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                       */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const t = useTranslations("hero")

  return (
    <section id="hero" className="relative overflow-hidden bg-[#FDFAF6] pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32">
      {/* Subtle background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#FF6B4A]/[0.04] via-[#FFB547]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#FFAA8A]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column -- Text content */}
          <div className="max-w-xl">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span
                className={cn(
                  "inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full",
                  "bg-[#FFF0ED] text-[#FF6B4A] text-sm font-medium"
                )}
              >
                {/* Pulse dot */}
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF6B4A] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF6B4A]" />
                </span>
                {t("badge")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#1A1A1A]"
            >
              {t("title1")}
              <br />
              <HighlightedLine text={t("title2")} keywords={["logiciel", "software"]} />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-md"
            >
              {t("subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className={cn(
                  "inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-sm font-semibold",
                  "bg-[#1A1A1A] text-white",
                  "hover:bg-[#333] active:scale-[0.98]",
                  "transition-all duration-200 shadow-lg hover:shadow-xl"
                )}
              >
                {t("cta")}
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary link */}
              <a
                href="#solutions"
                className="text-sm font-medium text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors underline underline-offset-4 decoration-[#E0D8CC] hover:decoration-[#1A1A1A]"
              >
                {t("ctaSecondary")}
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-3"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#FFB547] fill-[#FFB547]"
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B6B6B] font-medium">
                {t("socialProof", { count: 47 })}
              </span>
            </motion.div>
          </div>

          {/* Right column -- Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden md:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
