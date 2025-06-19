import { Card } from '@/components/ui/card';
import { Shield, Zap, Globe, Code, Lock, TrendingUp } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-400">Platform Features</div>
          <h2 className="text-5xl font-light lg:text-6xl">Everything you need to build</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              icon: <Shield className="h-6 w-6" />,
              title: 'Security First',
              description: 'Multi-layered security architecture with formal verification and continuous auditing.',
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: 'Lightning Fast',
              description: 'Sub-second finality with throughput exceeding 10,000 transactions per second.',
            },
            {
              icon: <Globe className="h-6 w-6" />,
              title: 'Cross-Chain',
              description: 'Seamless interoperability with all major blockchain networks and protocols.',
            },
            {
              icon: <Code className="h-6 w-6" />,
              title: 'Developer Tools',
              description: 'Comprehensive SDK, APIs, and development environment for rapid deployment.',
            },
            {
              icon: <Lock className="h-6 w-6" />,
              title: 'Privacy Focused',
              description: 'Zero-knowledge proofs and advanced cryptography protect user privacy.',
            },
            {
              icon: <TrendingUp className="h-6 w-6" />,
              title: 'Scalable',
              description: 'Dynamic sharding and layer-2 solutions that scale with network demand.',
            },
          ].map((feature, i) => (
            <Card
              key={i}
              className="group border-white/10 bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-8 transition-all duration-300 hover:border-blue-400/30 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-blue-900/30"
            >
              <div className="space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-gray-900/20 to-blue-900/20 transition-all duration-300 group-hover:border-blue-400/50">
                  <div className="text-white transition-colors duration-300 group-hover:text-blue-400">{feature.icon}</div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-light tracking-wide transition-colors duration-300 group-hover:text-blue-400">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}