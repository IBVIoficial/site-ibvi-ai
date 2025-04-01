import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
// Removed StylizedImage and Testimonial imports
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/24/solid' // For Secondary Features
import {
  BoltIcon,
  CalendarDaysIcon,
  UsersIcon,
} from '@heroicons/react/24/outline' // For Primary Features
// Removed client logo imports
// Removed imageLaptop import
// Removed MDX related imports

// Renamed Clients to Stats for clarity, updated content
function Stats() {
  // Stats data from HomePage/StatsSection.tsx
  const stats = [
    { id: 1, name: 'Profissionais do mercado', value: '5.000+' },
    { id: 2, name: 'Precisão nas avaliações', value: '90%+' },
    { id: 3, name: 'Redução no tempo de análise', value: '70%' },
    { id: 4, name: 'Valor de mercado analisado', value: 'R$1.5T' },
  ]

  return (
    // Adapted structure from StatsSection.tsx, using Container
    <div className="relative isolate bg-dark-green px-6 py-24sm:py-32 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
      {/* Decorative background (optional, adapted from StatsSection) */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-verde to-verde-escuro opacity-20 dark:opacity-10"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <Container>
        <div className="mx-auto max-w-7xl py-24">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold uppercase tracking-wide text-white">Nossos Resultados</h2>
            <p className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Confiado por profissionais do mercado imobiliário
            </p>
            <p className="mt-6 text-lg leading-8 text-white/80">
              O IBVI fortalece o ecossistema imobiliário, entregando confiabilidade, segurança e análises
              consistentes.
            </p>
          </div>
          <FadeInStagger faster>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-12 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <FadeIn key={stat.id}>
                  <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                    <dt className="text-sm font-medium leading-6 text-white/80">
                      {stat.name}
                    </dt>
                    <dd className="mt-3 text-4xl font-semibold tracking-tight text-white">
                      {stat.value}
                    </dd>
                    <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-white/5 blur-2xl"></div>
                  </div>
                </FadeIn>
              ))}
            </dl>
          </FadeInStagger>
        </div>
      </Container>
    </div>
  )
}

// Renamed CaseStudies to SecondaryFeatures for clarity
function SecondaryFeatures() {
  // Secondary features data from HomePage/SecondaryFeatures.tsx
  const secondaryFeatures = [
    {
      name: 'Transparência Orientada a Dados',
      description:
        'Ao integrar análises avançadas e fontes de dados confiáveis, o IBVI promove uma compreensão mais clara e coerente dos valores imobiliários, reduzindo incertezas e subjetividades.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Credibilidade e Confiança',
      description:
        'Estabelecendo referências imparciais e padronizadas, o IBVI fortalece a confiança de compradores, vendedores e investidores, assegurando avaliações mais consistentes e justas.',
      icon: LockClosedIcon,
    },
    {
      name: 'Eficiência nas Transações',
      description:
        'Com benchmarks sólidos e insights orientados por dados, o processo de negociação torna-se mais ágil, encurtando prazos e aumentando a fluidez do mercado imobiliário.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Nuances do Mercado Premium',
      description:
        'Algoritmos de IA especializados capturam as sutilezas do segmento de alto padrão, garantindo avaliações que refletem com fidelidade a complexidade desses ativos de grande valor.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Fundamentação Acadêmica e Regulatória',
      description:
        'A abordagem baseada em dados não apenas beneficia o setor privado, mas também pode orientar pesquisas acadêmicas, políticas públicas, critérios de crédito e planejamento urbano.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Escala e Interconexão Regional',
      description:
        'A experiência desenvolvida no Brasil pode servir como referência para outros mercados na América Latina, impulsionando uma visão mais integrada e confiável da valorização imobiliária na região.',
      icon: ServerIcon,
    },
  ]

  return (
    <>
      {/* Text from SecondaryFeatures.tsx */}
      <SectionIntro
        eyebrow="IBVI" // Or another suitable eyebrow
        title="Transformando o Mercado Imobiliário Brasileiro"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-neutral-700">
          O IBVI utiliza análises avançadas, aprendizado de máquina e
          avaliações padronizadas para impulsionar a transparência, precisão e
          eficiência no mercado imobiliário brasileiro.
        </p>
      </SectionIntro>
      <Container className="mt-32">
        {/* Adapted grid from original CaseStudies section */}
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Features from SecondaryFeatures.tsx */}
          {secondaryFeatures.map((feature) => (
            <FadeIn key={feature.name} className="flex">
              {/* Using article structure similar to original CaseStudies */}
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                {/* Feature Icon and Name */}
                <div className="flex items-center gap-x-3">
                  <feature.icon
                    className="h-8 w-8 text-dark-green" // Adjusted size and color
                    aria-hidden="true"
                  />
                  <h3 className="font-display text-xl font-semibold text-dark-green">
                    {/* Link removed as features don't have specific hrefs */}
                    {/* <span className="absolute inset-0 rounded-3xl" /> */}
                    {feature.name}
                  </h3>
                </div>
                {/* Feature Description */}
                <p className="mt-4 text-base text-neutral-700">
                  {feature.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

// Renamed Services to PrimaryFeatures for clarity
function PrimaryFeatures() {
  // Primary features data from HomePage/PrimaryFeatures.tsx
  const primaryFeatures = [
    {
      name: 'Avaliações Imobiliárias Inteligentes',
      description:
        'O IBVI utiliza inteligência artificial avançada para fornecer avaliações precisas e automatizadas, estabelecendo um novo padrão de transparência no mercado premium.',
      href: '#', // Keep href or remove if not needed
      icon: BoltIcon,
    },
    {
      name: 'Índice de Mercado Premium',
      description:
        'Desenvolvemos o primeiro índice de referência para imóveis de alto padrão no Brasil, similar à FIPE, mas especializado no segmento premium.',
      href: '#',
      icon: UsersIcon,
    },
    {
      name: 'Análises Preditivas Avançadas',
      description:
        'Powered by Google Cloud e Gemini, nossas análises preditivas identificam tendências e oportunidades no mercado imobiliário de luxo com precisão incomparável.',
      href: '#',
      icon: CalendarDaysIcon,
    },
  ]

  return (
    <>
      {/* Text from PrimaryFeatures.tsx */}
      <SectionIntro
        eyebrow="IBVI" // Changed eyebrow
        title="Soluções que impulsionam o mercado imobiliário"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-neutral-700">
          O IBVI oferece ferramentas avançadas para simplificar avaliações,
          criar conexões e explorar tendências do mercado.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        {/* Removed the image part, using List directly */}
        {/* Adapting the List component from original Services section */}
        <List>
          {/* Features from PrimaryFeatures.tsx */}
          {primaryFeatures.map((feature) => (
            <ListItem key={feature.name} title={feature.name}>
              {/* Feature Icon added before description */}
              <div className="flex items-start gap-x-3">
                <div className="flex-shrink-0 pt-1">
                  <feature.icon
                    className="h-6 w-6 text-dark-green"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  {feature.description}
                  {/* Optional Link */}
                  <p className="mt-2">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold text-dark-green transition hover:text-neutral-700"
                    >
                      Saiba mais <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </p>
                </div>
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  // Updated description based on HomePage content
  description:
    'IBVI - Inovação em Avaliações Imobiliárias e Soluções para o Mercado Imobiliário. A FIPE do Mercado Imobiliário.',
}

export default async function Home() {
  // Removed case studies loading
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-16 sm:mt-24 md:mt-40 py-16 sm:py-24">
        <FadeIn className="max-w-4xl">
          {/* Text from Hero.tsx */}
          <h1 className="font-display text-5xl font-semibold tracking-tight [text-wrap:balance] text-dark-green sm:text-7xl">
            A <span className="text-neutral-700">FIPE</span> do Mercado Imobiliário
          </h1>
          <p className="mt-6 text-xl text-neutral-700">
            Descubra como o IBVI revoluciona o mercado imobiliário brasileiro
            com avaliações precisas, análises preditivas, elevando a
            transparência e a eficiência nas transações.
          </p>
          {/* Optional: Add buttons from Hero.tsx if desired */}
           <div className="mt-10 flex gap-x-6">
             <Link
               href="/sobre" // Example link
               className="rounded-md bg-dark-green px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dark-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-green"
             >
               Conheça mais
             </Link>
             <Link
               href="/contato" // Example link
               className="text-sm font-semibold leading-6 text-dark-green"
             >
               Entre em contato <span aria-hidden="true">→</span>
             </Link>
           </div>
        </FadeIn>
      </Container>

      {/* Renamed component calls */}
      <Stats />

      <SecondaryFeatures />

      {/* Testimonial section removed */}

      <PrimaryFeatures />

      <ContactSection />
    </>
  )
}