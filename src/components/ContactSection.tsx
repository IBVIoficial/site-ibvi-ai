import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-dark-green px-6 py-24 sm:mx-0 sm:py-36 md:px-12">
        <div className="mx-auto max-w-4xl">
          {/* Centered the content */}
          <div className="text-center">
            <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
              Vamos conversar sobre seu próximo projeto?
            </h2>
            {/* Centered the button */}
            <div className="mt-8">
              <Button href="/contact" invert>
                Entre em Contato
              </Button>
            </div>
            {/* Increased top margin for the offices section */}
            <div className="mt-16 border-t border-white/10 pt-10">
              {/* Kept office title left-aligned for contrast */}
              <h3 className="font-display text-base font-semibold text-white text-left">
                Nosso Escritório
              </h3>
              <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 text-left"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
