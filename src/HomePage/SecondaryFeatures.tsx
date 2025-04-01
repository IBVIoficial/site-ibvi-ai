'use client';

import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon
} from '@heroicons/react/20/solid';

const secondaryFeatures = [
    {
        name: 'Transparência Orientada a Dados',
        description:
            'Ao integrar análises avançadas e fontes de dados confiáveis, o IBVI promove uma compreensão mais clara e coerente dos valores imobiliários, reduzindo incertezas e subjetividades.',
        icon: CloudArrowUpIcon
    },
    {
        name: 'Credibilidade e Confiança',
        description:
            'Estabelecendo referências imparciais e padronizadas, o IBVI fortalece a confiança de compradores, vendedores e investidores, assegurando avaliações mais consistentes e justas.',
        icon: LockClosedIcon
    },
    {
        name: 'Eficiência nas Transações',
        description:
            'Com benchmarks sólidos e insights orientados por dados, o processo de negociação torna-se mais ágil, encurtando prazos e aumentando a fluidez do mercado imobiliário.',
        icon: ArrowPathIcon
    },
    {
        name: 'Nuances do Mercado Premium',
        description:
            'Algoritmos de IA especializados capturam as sutilezas do segmento de alto padrão, garantindo avaliações que refletem com fidelidade a complexidade desses ativos de grande valor.',
        icon: FingerPrintIcon
    },
    {
        name: 'Fundamentação Acadêmica e Regulatória',
        description:
            'A abordagem baseada em dados não apenas beneficia o setor privado, mas também pode orientar pesquisas acadêmicas, políticas públicas, critérios de crédito e planejamento urbano.',
        icon: Cog6ToothIcon
    },
    {
        name: 'Escala e Interconexão Regional',
        description:
            'A experiência desenvolvida no Brasil pode servir como referência para outros mercados na América Latina, impulsionando uma visão mais integrada e confiável da valorização imobiliária na região.',
        icon: ServerIcon
    }
];

export default function SecondaryFeatures() {
    return (
        <div className='relative isolate bg-secondary-claro/50 dark:bg-gray-900'>
            <div className='px-6 py-24 sm:py-32 lg:px-8'>
                <div className='mx-auto max-w-2xl lg:text-center'>
                    <h2 className='text-3xl font-semibold uppercase tracking-wide text-primary'>IBVI</h2>
                    <p className='mt-6 text-4xl font-bold tracking-wide text-primary-escuro dark:text-secondary-claro sm:text-5xl'>
                        o Mercado Imobiliário Brasileiro
                    </p>
                    <p className='mt-6 text-lg leading-8 text-secondary-escuro/80 dark:text-secondary-claro/80'>
                        O IBVI utiliza análises avançadas, aprendizado de máquina e avaliações padronizadas para
                        impulsionar a transparência, precisão e eficiência no mercado imobiliário brasileiro.
                    </p>
                </div>
                <div className='mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24'>
                    <dl className='grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
                        {secondaryFeatures.map((feature) => (
                            <div
                                key={feature.name}
                                className='relative rounded-lg bg-card p-8 shadow-lg dark:bg-gray-800'>
                                <dt className='flex items-center gap-x-3'>
                                    <feature.icon className='size-6 text-primary' aria-hidden='true' />
                                    <span className='text-lg font-semibold text-primary-escuro dark:text-primary-claro'>
                                        {feature.name}
                                    </span>
                                </dt>
                                <dd className='mt-4 text-base text-secondary-escuro dark:text-secondary-claro'>
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
