'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="text-sm uppercase tracking-[0.2em] text-blue-400">Next Generation Infrastructure</div>
            <h1 className="text-6xl font-light leading-[0.9] tracking-tight lg:text-8xl">
              The crypto{' '}
              <span className="relative font-normal">
                building
                <div className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-blue-400 to-transparent"></div>
              </span>{' '}
              to the infrastructure
            </h1>
            <p className="max-w-lg text-xl font-light leading-relaxed text-gray-300">
              Monad Chain empowers the next generation of decentralized applications with unparalleled performance and
              security.
            </p>
          </div>
          <div className="flex flex-col gap-6 sm:flex-row">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 px-12 py-4 text-sm tracking-wide text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:from-blue-600 hover:to-blue-700"
            >
              EXPLORE PLATFORM
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 px-12 py-4 text-sm tracking-wide text-black transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
            >
              DOCUMENTATION
              <ArrowUpRight className="ml-3 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="transform transition-transform duration-1000" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
            <Card className="border-white/10 bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-8 backdrop-blur-lg transition-all duration-300 hover:border-blue-400/30">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-light tracking-wide">PORTFOLIO OVERVIEW</h3>
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-gradient-to-r from-gray-900/20 to-blue-900/20 p-4">
                    <span className="text-sm tracking-wide text-gray-300">TOTAL VALUE</span>
                    <span className="text-2xl font-light text-blue-400">$847,230</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'ETH', amount: '127.5', value: '$312,750' },
                      { name: 'USDC', amount: '185,500', value: '$185,500' },
                      { name: 'MONAD', amount: '28,400', value: '$348,980' },
                    ].map((token, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg border-b border-white/10 p-3 transition-colors hover:bg-blue-900/10 last:border-b-0"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="h-8 w-8 rounded-full border border-white/20 bg-gradient-to-br from-gray-900/20 to-blue-900/20"></div>
                          <div>
                            <div className="text-sm font-light tracking-wide">{token.name}</div>
                            <div className="text-xs text-gray-400">{token.amount}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-light">{token.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}