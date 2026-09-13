import type { Metadata, Viewport } from 'next';
import { Noto_Sans_Devanagari } from 'next/font/google';
import { invitation } from '@/config/invitation';
import './globals.css';

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-devanagari',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sahyadri-codeworks.github.io/Digital-Invitations-Link'),
  title: invitation.seo.title,
  description: invitation.seo.description,
  openGraph: {
    title: invitation.seo.title,
    description: invitation.seo.description,
    images: [invitation.invitationImage],
    type: 'website',
    locale: 'mr_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: invitation.seo.title,
    description: invitation.seo.description,
    images: [invitation.invitationImage],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#7a1b3b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className={notoSansDevanagari.variable}>
      <body className="font-devanagari bg-cream-50 text-maroon-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
