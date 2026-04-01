import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { GettingStartedContent } from "@/components/getting-started-content"

export const metadata: Metadata = {
  title: "Getting Started — Lazarus IDE",
  description:
    "Learn how to install and configure Lazarus IDE. Step-by-step guide for Windows, macOS, and Linux with your first project tutorial.",
}

export default function GettingStartedPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <GettingStartedContent />
      </main>
      <Footer />
    </>
  )
}
