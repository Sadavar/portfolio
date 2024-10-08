import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Roboto } from 'next/font/google';
import clsx from 'clsx';
import config from 'data/config';
import 'components/ui/globals.css';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const { url, defaultDescription, defaultTitle } = config;

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(url),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url,
    siteName: defaultTitle,
    images: [
      {
        url: '/assets/thumbnail/thumbnail.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/assets/illustrations/icon.png',
    shortcut: '/assets/illustrations/icon.png',
    apple: '/assets/illustrations/icon.png',
  },
  manifest: '/assets/favicon/site.webmanifest',
  alternates: {
    canonical: "/",
  },
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

type RootLayoutProps = {
  children: ReactNode;
};

export const revalidate = 3600;

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body className={clsx('bg-black min-h-screen font-sans antialiased scroll-smooth overflow-x-hidden', roboto.variable)}>
      {children}
      <Analytics />
      <SpeedInsights />
    </body>
    <GoogleAnalytics gaId={config.googleAnalyticsID} />
  </html>
);

export default RootLayout;
