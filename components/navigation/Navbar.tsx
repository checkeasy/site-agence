"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Sparkles, Menu, X, Globe, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter, usePathname } from "next/navigation"

const navLinks = [
  { key: "niches", href: "#solutions" },
  { key: "process", href: "#process" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const

export default function Navbar() {
  const t = useTranslations("nav")
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()
  const router = useRouter()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  const currentLocale = pathname.startsWith("/en") ? "en" : "fr"

  const handleLanguageSwitch = () => {
    const targetLocale = currentLocale === "fr" ? "en" : "fr"
    const pathWithoutLocale = pathname.replace(/^\/(fr|en)/, "") || "/"
    router.push(`/${targetLocale}${pathWithoutLocale}`)
  }

  const getLinkLabel = (key: string): string => {
    switch (key) {
      case "niches":
        return t("niches")
      case "process":
        return t("process")
      case "pricing":
        return t("pricing")
      case "faq":
        return "FAQ"
      default:
        return key
    }
  }

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-[#F0EBE3]/60"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="Bar a Features - Accueil"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#FF6B4A] text-white transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </span>
            <span className="font-bold text-lg text-[#1A1A1A] tracking-tight">
              Bar a Features
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200",
                    "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F7F3ED]"
                  )}
                >
                  {getLinkLabel(link.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={handleLanguageSwitch}
              className={cn(
                "flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium",
                "text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#F7F3ED] transition-colors duration-200"
              )}
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span>{t("language")}</span>
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-sm font-semibold",
                "bg-[#FF6B4A] text-white",
                "hover:bg-[#E55A3A] active:scale-[0.98]",
                "transition-all duration-200 shadow-sm hover:shadow-md"
              )}
            >
              {t("demo")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#1A1A1A] hover:bg-[#F7F3ED] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Panel header */}
                <div className="flex items-center justify-between px-6 h-[72px] border-b border-[#F0EBE3]">
                  <span className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#FF6B4A] text-white">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <span className="font-bold text-[#1A1A1A]">Bar a Features</span>
                  </span>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-[#F7F3ED] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 text-[#1A1A1A]" />
                  </button>
                </div>

                {/* Panel links */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <ul className="flex flex-col gap-1">
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.3 }}
                      >
                        <a
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-3.5 rounded-2xl text-base font-medium text-[#1A1A1A] hover:bg-[#F7F3ED] transition-colors"
                        >
                          {getLinkLabel(link.key)}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Panel footer */}
                <div className="px-6 py-6 border-t border-[#F0EBE3] space-y-3">
                  <button
                    onClick={() => {
                      handleLanguageSwitch()
                      setMobileOpen(false)
                    }}
                    className="flex items-center gap-2 w-full px-4 py-3 rounded-2xl text-sm font-medium text-[#6B6B6B] hover:bg-[#F7F3ED] transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    {t("language")}
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-2xl text-sm font-semibold",
                      "bg-[#FF6B4A] text-white",
                      "hover:bg-[#E55A3A] active:scale-[0.98]",
                      "transition-all duration-200"
                    )}
                  >
                    {t("demo")}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
