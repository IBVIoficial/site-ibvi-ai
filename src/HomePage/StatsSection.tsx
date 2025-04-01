'use client';

const stats = [
    { id: 1, name: 'Profissionais do mercado premium', value: '5.000+' },
    { id: 2, name: 'Precisão nas avaliações', value: '90%+' },
    { id: 3, name: 'Redução no tempo de análise', value: '70%' },
    { id: 4, name: 'Valor de mercado analisado', value: 'R$1.5T' }
];

export default function StatsSection() {
    return (
        <div className='relative isolate bg-white px-6 py-24 dark:bg-gray-950 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-7xl'>
                <div className='mx-auto max-w-2xl lg:mx-0'>
                    <h2 className='text-base font-semibold uppercase tracking-wide text-verde'>Nossos Resultados</h2>
                    <p className='mt-6 text-4xl font-bold tracking-tight text-verde-escuro dark:text-cinza-claro sm:text-5xl'>
                        Confiado por profissionais do mercado imobiliário
                    </p>
                    <p className='mt-6 text-lg leading-8 text-cinza-escuro/80 dark:text-cinza-claro/80'>
                        O IBVI fortalece o ecossistema imobiliário, entregando confiabilidade, segurança e análises
                        consistentes.
                    </p>
                </div>
                <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
                    {stats.map((stat) => (
                        <div key={stat.id} className='flex flex-col gap-y-3 border-l border-verde/20 pl-6'>
                            <dt className='text-sm font-medium leading-6 text-cinza-escuro dark:text-cinza-claro'>
                                {stat.name}
                            </dt>
                            <dd className='order-first text-4xl font-semibold tracking-tight text-verde dark:text-verde-claro'>
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>

            {/* Decorative background */}
            <div aria-hidden='true' className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'>
                <div
                    className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-verde to-verde-escuro opacity-20'
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                />
            </div>
        </div>
    );
}
