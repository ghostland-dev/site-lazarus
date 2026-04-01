import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ExtensionsContent } from "@/components/extensions-content"

export const metadata: Metadata = {
  title: "Extensions & Tools — Lazarus IDE",
  description:
    "Discover VSCode extensions, editor plugins, and developer tools for Free Pascal and Lazarus development.",
}

export default function ExtensionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ExtensionsContent />
      </main>
      <Footer />
    </>
  )
}
