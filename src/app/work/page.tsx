import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <Container className="mt-40">
      <FadeIn>
        {/* Changed text color and content */}
        <h2 className="font-display text-2xl font-semibold text-dark-green">
          Estudos de Caso
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              {/* Changed border color */}
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16 border-dark-green/10">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    {/* Changed text color */}
                    <h3 className="mt-6 text-sm font-semibold text-dark-green sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    {/* Changed text color and border color for the slash */}
                    <p className="text-sm tracking-tight text-dark-green after:ml-4 after:font-semibold after:text-dark-green/30 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    {/* Changed text color */}
                    <p className="text-sm text-dark-green lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  {/* Changed text color */}
                  <p className="font-display text-4xl font-medium text-dark-green">
                    <Link href={caseStudy.href} className="hover:text-dark-green-light transition">{caseStudy.title}</Link>
                  </p>
                  {/* Changed text color */}
                  <div className="mt-6 space-y-6 text-base text-neutral-700">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Ler estudo de caso: ${caseStudy.client}`}
                      className="bg-dark-green hover:bg-dark-green-light"
                    >
                      Ler estudo de caso
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12 border-dark-green/10"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ['Phobia', logoPhobia],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* Changed text color and content */}
        <h2 className="font-display text-2xl font-semibold text-dark-green">
          Nossos Clientes e Parceiros
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        {/* Changed border color */}
        <Border as={FadeIn} className="border-dark-green/10" />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                {/* Changed border color */}
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px border-dark-green/10">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Projetos - IBVI',
  description:
    'Explore os estudos de caso do IBVI e veja como aplicamos inteligência artificial e análise de dados para resolver desafios no mercado imobiliário brasileiro.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <>
      <PageIntro
        eyebrow="Nosso Trabalho"
        title="Soluções Inovadoras para o Mercado Imobiliário"
      >
        <p className="text-neutral-700">
          Demonstramos como nossa expertise em inteligência de dados e IA
          transforma a avaliação imobiliária, trazendo precisão e
          transparência para nossos clientes e parceiros.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      {/* Removed generic Testimonial section */}

      <Clients />

      <ContactSection />
    </>
  )
}
