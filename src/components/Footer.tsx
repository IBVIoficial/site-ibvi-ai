import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { socialMediaProfiles } from '@/components/SocialMedia'
import Image from 'next/image'

const navigation = [
  {
    title: 'Projetos',
    links: [
      { title: 'FamilyFund', href: '/work/family-fund' },
      { title: 'Unseal', href: '/work/unseal' },
      { title: 'Phobia', href: '/work/phobia' },
      {
        title: (
          <>
            Ver todos <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { title: 'Sobre', href: '/about' },
      { title: 'Tecnologia', href: '/process' },
      { title: 'Blog', href: '/blog' },
      { title: 'Contato', href: '/contact' },
    ],
  },
  {
    title: 'Conecte-se',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Assine nossa newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Inscreva-se para receber as últimas notícias, artigos, recursos e
        inspiração sobre design.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Endereço de email"
          autoComplete="email"
          aria-label="Endereço de email"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pr-20 pl-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Enviar"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-dark-green text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Image src="/images/ibvi.png" alt="IBVI" width={100} height={100} />
          </Link>
          <p className="text-sm text-neutral-700">
            © IBVI AI {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
