import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Bar a Features | SaaS sur-mesure pour votre metier",
  description: "On cree des logiciels tailles pour votre facon de travailler. Un SaaS pense pour VOTRE metier, livre en 4 semaines.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
