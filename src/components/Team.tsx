export default function Team() {
  return (
    <section className="border-t border-white/10 py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 space-y-6 text-center">
          <div className="text-sm uppercase tracking-[0.2em] text-blue-400">Leadership Team</div>
          <h2 className="text-5xl font-light lg:text-6xl">Built by experts</h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { name: 'Sarah Chen', role: 'Chief Executive Officer', background: 'Former VP Engineering at Coinbase' },
            { name: 'Marcus Rodriguez', role: 'Chief Technology Officer', background: 'Ex-Principal Engineer at Ethereum Foundation' },
            { name: 'Dr. Aisha Patel', role: 'Head of Research', background: 'PhD Cryptography, MIT' },
          ].map((member, i) => (
            <div key={i} className="group space-y-6 text-center">
              <div className="mx-auto h-32 w-32 rounded-full border border-white/20 bg-gradient-to-br from-gray-900/20 to-blue-900/20 transition-all duration-300 group-hover:border-blue-400/50"></div>
              <div className="space-y-2">
                <h3 className="text-xl font-light tracking-wide transition-colors duration-300 group-hover:text-blue-400">{member.name}</h3>
                <div className="text-sm uppercase tracking-wide text-blue-400">{member.role}</div>
                <div className="text-sm text-gray-400">{member.background}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}