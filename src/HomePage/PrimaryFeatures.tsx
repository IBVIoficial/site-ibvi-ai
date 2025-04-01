'use client';

import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline';

// IBVI primary features adapted from the original code
const primaryFeatures = [
    {
        name: 'Avaliações Imobiliárias Inteligentes',
        description:
            'O IBVI utiliza inteligência artificial avançada para fornecer avaliações precisas e automatizadas, estabelecendo um novo padrão de transparência no mercado premium.',
        href: '#',
        icon: BoltIcon
    },
    {
        name: 'Índice de Mercado Premium',
        description:
            'Desenvolvemos o primeiro índice de referência para imóveis de alto padrão no Brasil, similar à FIPE, mas especializado no segmento premium.',
        href: '#',
        icon: UsersIcon
    },
    {
        name: 'Análises Preditivas Avançadas',
        description:
            'Powered by Google Cloud e Gemini, nossas análises preditivas identificam tendências e oportunidades no mercado imobiliário de luxo com precisão incomparável.',
        href: '#',
        icon: CalendarDaysIcon
    }
];

export default function PrimaryFeatures() {
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8 bg-background">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="font-semibold text-2xl uppercase tracking-wide text-primary">IBVI</h2>
                <p className="mt-6 font-bold text-4xl tracking-wide sm:text-5xl text-primary-escuro dark:text-secondary-claro">
                    Soluções que impulsionam o mercado imobiliário
                </p>
                <p className="mt-6 text-lg leading-8 text-secondary-escuro/80 dark:text-secondary-claro/80">
                    O IBVI oferece ferramentas avançadas para simplificar avaliações, criar conexões e explorar
                    tendências do mercado.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 max-w-xl lg:grid-cols-3 lg:max-w-none">
                    {primaryFeatures.map((feature) => (
                        <div key={feature.name} className="flex flex-col">
                            <dt className="flex items-center gap-x-3 font-semibold text-xl leading-7 text-primary-escuro dark:text-primary-claro">
                                <div className="p-3 rounded-lg ring-1 bg-primary/10 ring-primary/20">
                                    <feature.icon className="size-6 text-primary" aria-hidden="true" />
                                </div>
                                {feature.name}
                            </dt>
                            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-escuro dark:text-secondary-claro">
                                <p className="flex-auto">{feature.description}</p>
                                <p className="mt-6">
                                    <a href={feature.href} className="font-semibold text-sm transition-colors duration-200 text-primary hover:text-primary/80">
                                        Saiba mais <span aria-hidden="true">→</span>
                                    </a>
                                </p>
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    );
}
