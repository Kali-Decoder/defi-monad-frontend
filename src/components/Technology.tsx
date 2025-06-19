import { Card } from '@/components/ui/card';

export default function Technology() {
  return (
    <section id="technology" className="border-t border-white/10 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-sm uppercase tracking-[0.2em] text-blue-400">Core Technology</div>
              <h2 className="text-5xl font-light leading-tight lg:text-6xl">Built for the future of finance</h2>
              <p className="text-xl font-light leading-relaxed text-gray-300">
                Our advanced consensus mechanism and parallel execution engine deliver unprecedented throughput while
                maintaining complete decentralization.
              </p>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Parallel Execution', desc: 'Process thousands of transactions simultaneously' },
                { title: 'Optimistic Consensus', desc: 'Achieve finality in under 1 second' },
                { title: 'EVM Compatible', desc: 'Deploy existing Ethereum contracts seamlessly' },
              ].map((item, i) => (
                <div key={i} className="group flex items-start space-x-6">
                  <div className="mt-2 h-12 w-px bg-gradient-to-b from-blue-400 to-white/20 transition-colors duration-300 group-hover:from-blue-400"></div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-light tracking-wide transition-colors duration-300 group-hover:text-blue-400">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Card className="border-white/10 bg-gradient-to-br from-gray-900/50 to-blue-900/20 p-8 backdrop-blur-lg transition-all duration-300 hover:border-blue-400/30">
              <div className="space-y-6">
                <div className="text-sm tracking-wide text-blue-400">SMART CONTRACT</div>
                <div className="space-y-2 font-mono text-sm text-gray-300">
                  <div>contract MonadProtocol {"{"}</div>
                  <div className="ml-4">mapping(address ={'>'} uint256) balances;</div>
                  <div className="ml-4">event Transfer(address, uint256);</div>
                  <div className="ml-4"></div>
                  <div className="ml-4 text-blue-400">function execute() external {"{"}</div>
                  <div className="ml-8">require(msg.sender == owner);</div>
                  <div className="ml-8">_processTransaction();</div>
                  <div className="ml-4 text-blue-400">{"}"}</div>
                  <div>{"}"}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}