import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { IntroductionSection } from "@/components/introduction-section"
import { FeaturesSection } from "@/components/features-section"
import { FreePascalSection } from "@/components/freepascal-section"
import { LclSection } from "@/components/lcl-section"
import { WidgetsetsSection } from "@/components/widgetsets-section"
import { CrossPlatformSection } from "@/components/crossplatform-section"
import { ComparisonSection } from "@/components/comparison-section"
import { HistorySection } from "@/components/history-section"
import { DownloadsSection } from "@/components/downloads-section"
import { DocumentationSection } from "@/components/documentation-section"
import { FaqSection } from "@/components/faq-section"
import { ContributionSection } from "@/components/contribution-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <IntroductionSection />
        <FeaturesSection />
        <FreePascalSection />
        <LclSection />
        <WidgetsetsSection />
        <CrossPlatformSection />
        <ComparisonSection />
        <HistorySection />
        <DownloadsSection />
        <DocumentationSection />
        <FaqSection />
        <ContributionSection />
      </main>
      <Footer />
    </>
  )
}
