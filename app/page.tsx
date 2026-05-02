export default function Home() {
  const faqs = [
    {
      q: 'Which databases are supported?',
      a: 'PostgreSQL, MySQL, and Aurora are supported via read-only credentials. We never write to your database.'
    },
    {
      q: 'How are cloud costs calculated?',
      a: 'We use live pricing APIs from AWS, GCP, and Azure to map query execution time and I/O to real dollar amounts per query.'
    },
    {
      q: 'Is my production data safe?',
      a: 'We only analyze query execution plans and metadata — never your actual row data. All credentials are encrypted at rest.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Profile Database Query Costs{' '}
          <span className="text-[#58a6ff]">in Production</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect via read-only credentials. Analyze execution plans and query frequency.
          See exactly which queries are burning your cloud budget — and how to fix them.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Profiling — $13/mo
        </a>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { stat: '$0.003', label: 'avg cost per slow query identified' },
            { stat: '< 2min', label: 'to connect your first database' },
            { stat: '40%', label: 'avg cloud bill reduction reported' }
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$13</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stop overpaying for slow queries.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Connect up to 5 production databases',
              'Real-time query cost dashboard',
              'Execution plan analysis',
              'Cloud provider cost mapping (AWS, GCP, Azure)',
              'Optimization suggestions per query',
              'Weekly cost digest email',
              'Slack & webhook alerts for cost spikes'
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-center text-xs text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} DB Query Cost Profiler. All rights reserved.
      </footer>
    </main>
  )
}
