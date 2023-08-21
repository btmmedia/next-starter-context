import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from './(footer)/Footer';
import Nav from './(header)/Nav';
import DataContextProvider from './dataProvider';

const poppins = Poppins({
  variable: '--poppins-font',
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'New Site',
  description: 'Site Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DataContextProvider>
      <html lang="en">
        <body
          className={`scroll-smooth bg-dark text-slate-50 ${poppins.className}`}
        >
          <div className="flex flex-col w-full">
            <Nav />
            <div className="flex min-h-[90vh] w-full">{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </DataContextProvider>
  )
}
