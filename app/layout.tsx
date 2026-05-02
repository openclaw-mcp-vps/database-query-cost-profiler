import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DB Query Cost Profiler — Profile database query costs in production',
  description: 'Monitor production database queries and calculate their real cloud compute costs. Find expensive queries, get optimization suggestions, and reduce your cloud bill.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bd35b375-5c2b-499a-bf72-04cc480f223a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
