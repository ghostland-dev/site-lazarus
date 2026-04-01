import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LibrariesContent } from "@/components/libraries-content"

export const metadata: Metadata = {
  title: "Libraries & Packages — Lazarus IDE",
  description:
    "Explore the rich ecosystem of Free Pascal and Lazarus libraries, components, and packages for building cross-platform applications.",
}

export default function LibrariesPage() {
  return (
    <>
      <Navbar />
      <main>
        <LibrariesContent />
      </main>
      <Footer />
    </>
  )
}
