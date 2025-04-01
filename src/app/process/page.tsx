import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-dark-green after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-dark-green sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    // Updated section title and content for IBVI context
    <Section title="Coleta e Análise de Dados" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-700">
        <p>
          Iniciamos cada projeto com uma imersão profunda para entender as{' '}
          <strong className="font-semibold text-dark-green">necessidades</strong> e
          objetivos específicos de nossos clientes. Coletamos e integramos uma vasta gama de dados do mercado imobiliário, incluindo transações, características dos imóveis, dados demográficos e socioeconômicos.
        </p>
        <p>
          Nossa equipe de cientistas de dados utiliza técnicas avançadas para limpar, organizar e analisar essas informações, identificando padrões, correlações e variáveis chave que influenciam o{' '}
          <strong className="font-semibold text-dark-green">valor</strong>{' '}
          dos imóveis e as tendências do mercado.
        </p>
        <p>
          Esta fase é crucial para garantir que nossas avaliações e modelos preditivos sejam construídos sobre uma base de dados sólida e{' '}
          <strong className="font-semibold text-dark-green">confiável</strong>.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-dark-green">
        Entregáveis desta fase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Diagnóstico de Necessidades</TagListItem>
        <TagListItem>Mapeamento de Fontes de Dados</TagListItem>
        <TagListItem>Relatório de Qualidade de Dados</TagListItem>
        <TagListItem>Análise Exploratória Inicial</TagListItem>
        <TagListItem>Definição de Variáveis Chave</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    // Updated section title and content for IBVI context
    <Section title="Modelagem e Validação" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-700">
        <p>
          Com os dados analisados, nossa equipe desenvolve modelos de avaliação e previsão utilizando algoritmos de{' '}
          <strong className="font-semibold text-dark-green">Inteligência Artificial</strong>{' '}
          e Machine Learning. Selecionamos as técnicas mais adequadas para capturar as nuances do mercado imobiliário premium.
        </p>
        <p>
          Os modelos são rigorosamente treinados e testados com dados históricos e submetidos a um processo de{' '}
          <strong className="font-semibold text-dark-green">validação</strong>{' '}
          cruzada para garantir sua precisão e robustez. Ajustamos os parâmetros e arquiteturas para otimizar o desempenho.
        </p>
        <p>
          Mantemos nossos clientes informados sobre o progresso através de relatórios claros e reuniões periódicas, garantindo alinhamento e transparência durante todo o processo de desenvolvimento e{' '}
          <strong className="font-semibold text-dark-green">calibração</strong>{' '}
          dos modelos.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Carlos Mendes', role: 'Diretor de Investimentos Imobiliários' }} // Example author
        className="mt-12"
      >
        A precisão dos modelos do IBVI superou nossas expectativas, fornecendo uma base sólida para nossas decisões de investimento.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    // Updated section title and content for IBVI context
    <Section title="Entrega e Implementação" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-700">
        <p>
          Após a validação final, os modelos e soluções são implementados. Entregamos os resultados através de plataformas interativas, APIs ou relatórios customizados, dependendo das{' '}
          <strong className="font-semibold text-dark-green">
            necessidades
          </strong>{' '}
          do cliente.
        </p>
        <p>
          Fornecemos treinamento e suporte para garantir que a equipe do cliente possa utilizar as ferramentas e interpretar os{' '}
          <strong className="font-semibold text-dark-green">insights</strong>{' '}
          gerados de forma eficaz. Nosso objetivo é integrar nossas soluções ao fluxo de trabalho do cliente.
        </p>
        <p>
          O processo não termina na entrega. Realizamos um monitoramento contínuo do desempenho dos modelos e oferecemos{' '}
          <strong className="font-semibold text-dark-green">
            suporte
          </strong>{' '}
          e atualizações para garantir que as soluções permaneçam precisas e relevantes frente às dinâmicas do{' '}
          <strong className="font-semibold text-dark-green">
            mercado
          </strong>.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-dark-green">
        Entregáveis desta fase
      </h3>
      <List className="mt-8">
        <ListItem title="Plataforma/API de Avaliação">
          Acesso aos modelos de avaliação e predição através de interfaces amigáveis ou integração via API.
        </ListItem>
        <ListItem title="Relatórios e Dashboards">
          Visualizações claras e insights acionáveis sobre o mercado e o valor dos ativos imobiliários.
        </ListItem>
        <ListItem title="Treinamento e Suporte Contínuo">
          Capacitação da equipe do cliente e suporte técnico para garantir o melhor uso das soluções IBVI.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nossos Valores"
        title="Pilares da nossa Atuação"
      >
        <p className="text-neutral-700">
          Nossas ações são guiadas por princípios fundamentais que asseguram a qualidade, a confiança e o impacto positivo do nosso trabalho no mercado imobiliário.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precisão">
            Compromisso com a acurácia e a confiabilidade das nossas avaliações, baseadas em dados robustos e modelos avançados.
          </GridListItem>
          <GridListItem title="Inovação">
            Busca contínua por novas tecnologias e metodologias para oferecer as soluções mais eficientes e atualizadas.
          </GridListItem>
          <GridListItem title="Transparência">
            Clareza em nossos processos e comunicação, construindo relações de confiança com clientes e parceiros.
          </GridListItem>
          <GridListItem title="Integridade">
            Atuação ética e responsável, respeitando os mais altos padrões profissionais em todas as nossas interações.
          </GridListItem>
          <GridListItem title="Colaboração">
            Trabalho em parceria com o ecossistema imobiliário para impulsionar o desenvolvimento e a eficiência do setor.
          </GridListItem>
          <GridListItem title="Impacto">
            Foco em gerar valor real para nossos clientes e contribuir positivamente para a evolução do mercado imobiliário brasileiro.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Nosso Processo - IBVI',
  description:
    'Entenda como o IBVI utiliza análise de dados, IA e validação rigorosa para entregar avaliações imobiliárias precisas e insights valiosos.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nosso Processo" title="Como Transformamos Dados em Valor">
        <p className="text-neutral-700">
          Seguimos um processo estruturado e data-driven para garantir que nossas soluções atendam às necessidades específicas de cada cliente e entreguem resultados confiáveis e acionáveis.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
