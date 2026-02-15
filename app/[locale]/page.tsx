import Navbar from "@/components/navigation/Navbar"
import HeroSection from "@/components/sections/HeroSection"
import ProblemSection from "@/components/sections/ProblemSection"
import SolutionSection from "@/components/sections/SolutionSection"
import ProcessSection from "@/components/sections/ProcessSection"
import SocialProofSection from "@/components/sections/SocialProofSection"
import NichesSection from "@/components/sections/NichesSection"
import PricingSection from "@/components/sections/PricingSection"
import FAQSection from "@/components/sections/FAQSection"
import CTASection from "@/components/sections/CTASection"
import Footer from "@/components/navigation/Footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SocialProofSection />
      <NichesSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
