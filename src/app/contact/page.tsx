import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-dark-green ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-dark-green focus:ring-dark-green/5 focus:outline-none"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-dark-green peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-dark-green"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-dark-green/20 outline-none checked:border-[0.5rem] checked:border-dark-green focus-visible:ring-1 focus-visible:ring-dark-green focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-dark-green">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form action="#" method="POST"> {/* Added action and method for clarity */}
        <h2 className="font-display text-base font-semibold text-dark-green">
          Consultas e Parcerias
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Telefone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Mensagem" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Assunto</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="Consulta Geral" name="subject" value="general" />
                <RadioInput label="Análise de Mercado" name="subject" value="market_analysis" />
                <RadioInput label="Parceria Estratégica" name="subject" value="partnership" />
                <RadioInput label="Outro" name="subject" value="other" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10 bg-dark-green hover:bg-dark-green-light">
          Enviar Mensagem
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-dark-green">
        Nossos Escritórios
      </h2>
      <p className="mt-6 text-base text-neutral-700">
        Prefere contato presencial? Veja nossos endereços ou entre em contato pelos canais digitais.
      </p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-dark-green">
          Envie um Email
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Carreiras', 'carreiras@ibvi.com.br'], // Example email
            ['Imprensa', 'imprensa@ibvi.com.br'],   // Example email
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-dark-green">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-700 hover:text-dark-green"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-dark-green">
          Siga-nos
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contato - IBVI',
  description: 'Entre em contato com o IBVI. Estamos prontos para atender você e discutir como nossas soluções podem beneficiar seus negócios imobiliários.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contato" title="Fale Conosco">
        <p className="text-neutral-700">Tem alguma dúvida ou proposta? Preencha o formulário ou utilize nossos outros canais de contato.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
