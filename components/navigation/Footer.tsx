"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#F0EBE3] bg-[#FDFAF6]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold tracking-tight text-[#1A1A1A]">
              Bar a Features
            </span>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#6B6B6B]">
              {t("tagline")}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              href="/legal"
              className="text-sm text-[#6B6B6B] transition-colors duration-200 hover:text-[#1A1A1A]"
            >
              {t("links.legal")}
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-[#6B6B6B] transition-colors duration-200 hover:text-[#1A1A1A]"
            >
              {t("links.privacy")}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#6B6B6B] transition-colors duration-200 hover:text-[#1A1A1A]"
            >
              {t("links.contact")}
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#F0EBE3] pt-6 text-center">
          <p className="text-sm text-[#999]">
            &copy; {year} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
