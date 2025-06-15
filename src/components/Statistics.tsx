export default function Statistics() {
  return (
    <section className="relative border-t border-white/10 py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/10 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {[
            { value: '$2.4B', label: 'Total Value Locked' },
            { value: '150K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '<100ms', label: 'Transaction Speed' },
          ].map((stat, i) => (
            <div key={i} className="group space-y-4 text-center">
              <div className="text-4xl font-light transition-colors duration-300 group-hover:text-blue-400 lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-sm uppercase tracking-wide text-gray-300">{stat.label}</div>
              <div className="mx-auto h-px w-8 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}