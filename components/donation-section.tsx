import { Heart, Coffee, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DonationSection() {
  return (
    <section id="donate" className="py-20 bg-surface-subtle" aria-labelledby="donate-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-card border border-border rounded-2xl p-8 sm:p-12 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative flex flex-col lg:flex-row items-center gap-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Heart className="w-10 h-10 text-white" fill="currentColor" />
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 id="donate-heading" className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Support Lazarus Development
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Lazarus is a <strong className="text-foreground">100% free and open-source</strong> project,
                developed and maintained by volunteers from around the world. Your donations help cover
                server costs, infrastructure, and enable contributors to dedicate more time to development.
              </p>
              <p className="text-sm text-muted-foreground">
                Every contribution, no matter the size, makes a difference and keeps the project alive.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 border-0 shadow-lg shadow-pink-500/25">
                <a href="https://fr.tipeee.com/open-source-contribution/" target="_blank" rel="noopener noreferrer">
                  <Coffee className="w-4 h-4" />
                  Support on Tipeee
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="https://www.paypal.com/donate?hosted_button_id=lazarus" target="_blank" rel="noopener noreferrer">
                  Donate via PayPal
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Supporters note */}
          <div className="relative mt-8 pt-6 border-t border-border">
            <p className="text-center text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Thank you</span> to all our supporters
              who make Lazarus possible. Your generosity fuels open-source innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
