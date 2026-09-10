import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Principia Superintelligence — Intelligence for scientific discovery',
  description: 'AI for scientific discovery. Principia is building intelligence to help scientists and engineers find new solutions and put them to the test.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>{children}</body></html>;
}
