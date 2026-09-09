import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Principia Superintelligence — AI for applied discovery',
  description: 'We’re building a research workspace that turns frontier AI into progress on real-world scientific and engineering problems.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
