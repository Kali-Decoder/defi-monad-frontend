import { CheckCircle } from 'lucide-react';

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-t border-white/10 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-400">Development Roadmap</div>
          <h2 className="text-5xl font-light lg:text-6xl">The path forward</h2>
        </div>
        <div className="space-y-12">
          {[
            {
              phase: 'Q1 2024',
              title: 'Mainnet Launch',
              status: 'completed',
              items: ['Core protocol deployment', 'Initial validator set', 'Basic DeFi primitives'],
            },
            {
              phase: 'Q2 2024',
              title: 'Ecosystem Growth',
              status: 'current',
              items: ['Developer incentive program', 'Cross-chain bridges', 'Advanced trading tools'],
            },
            {
              phase: 'Q3 2024',
              title: 'Scale & Optimize',
              status: 'upcoming',
              items: ['Parallel execution upgrade', 'Mobile wallet integration', 'Institutional custody'],
            },
            {
              phase: 'Q4 2024',
              title: 'Global Expansion',
              status: 'upcoming',
              items: ['Multi-language support', 'Regulatory compliance', 'Enterprise partnerships'],
            },
          ].map((phase, i) => (
            <div key={i} className="group flex items-start space-x-8">
              <div className="flex flex-col items-center">
                <div
                  className={`h-4 w-4 border-2 transition-all duration-300 ${
                    phase.status === 'completed'
                      ? 'border-blue-400 bg-blue-400 shadow-lg shadow-blue-400/30'
                      : phase.status === 'current'
                        ? 'border-blue-400 bg-blue-400/50 shadow-md shadow-blue-400/20'
                        : 'border-white/30 bg-transparent group-hover:border-blue-400/50'
                  }`}
                ></div>
                {i < 3 && (
                  <div
                    className={`mt-4 h-16 w-px transition-colors duration-300 ${phase.status === 'completed' ? 'bg-blue-400/30' : 'bg-white/20'}`}
                  ></div>
                )}
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-sm tracking-wide text-blue-400">{phase.phase}</div>
                  {phase.status === 'completed' && <CheckCircle className="h-4 w-4 text-blue-400" />}
                </div>
                <h3 className="text-2xl font-light transition-colors duration-300 group-hover:text-blue-400">{phase.title}</h3>
                <div className="grid gap-4 md:grid-cols-3">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center space-x-2 text-sm text-gray-300">
                      <div className="h-1 w-1 rounded-full bg-blue-400/50"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}