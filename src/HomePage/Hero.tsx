'use client';

import { useState } from 'react';

import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative isolate bg-background px-6 pt-14 text-foreground transition-colors duration-300 sm:px-6 lg:px-8'>
            {/* First gradient */}
            <div
                aria-hidden='true'
                className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className='relative aspect-[1155/678] w-[36.125rem] left-[calc(50%-11rem)] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-verde to-verde-escuro opacity-20 sm:w-[72.1875rem] sm:left-[calc(50%-30rem)] dark:from-verde-claro dark:to-verde'
                />
            </div>

            <div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-56'>
                <div className='space-y-8 text-center'>
                    <h1 className='text-balance text-7xl font-semibold leading-normal tracking-wider text-primary-escuro transition-colors sm:text-7xl dark:text-secondary-claro'>
                        A <span className='text-primary dark:text-primary-claro'>FIPE</span> do Mercado Imobiliário
                    </h1>
                    <p className='mx-auto max-w-2xl text-xl font-normal leading-relaxed tracking-wide text-secondary-escuro transition-colors sm:text-xl dark:text-secondary-claro/80'>
                        Descubra como o IBVI revoluciona o mercado imobiliário brasileiro com avaliações precisas,
                        análises preditivas, elevando a transparência e a eficiência nas transações.
                    </p>
                    <div className='mt-10 flex items-center justify-center gap-x-6'>
                        <Link
                            href='/sobre' 
                            className='rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:bg-primary dark:hover:bg-primary/90'
                        >
                            Conheça mais
                        </Link>
                        <Link
                            href='/contato' 
                            className='group text-base font-semibold text-primary transition-colors dark:text-primary-claro'
                        >
                            Entre em contato{' '}
                            <span
                                aria-hidden='true'
                                className='ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1'
                            >
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Second gradient */}
            <div
                aria-hidden='true'
                className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                    }}
                    className='relative aspect-[1155/678] w-[36.125rem] left-[calc(50%+3rem)] -translate-x-1/2 bg-gradient-to-tr from-verde-claro to-verde opacity-30 sm:w-[72.1875rem] sm:left-[calc(50%+36rem)] dark:from-verde dark:to-verde-escuro'
                />
            </div>
        </section>
    );
}
