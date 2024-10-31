import { Inter } from 'next/font/google';
import DarkModeToggle from '@/components/DarkModeToggle';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { ReactNode } from 'react'; // Import ReactNode for typing

const inter = Inter({ subsets: ['latin'] });

// Define the metadata for the layout
export const metadata = {
  title: 'Pilgrim-App',
  description: 'Pilgrim-App',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['nextjs', 'next14', 'pwa', 'next-pwa'],
  authors: [
    {
      name: 'Jereme Hancock',
      url: 'https://jeremehancock.com',
    },
  ],
  icons: [
    { rel: 'apple-touch-icon', url: '/icons/apple-touch-icon.png' },
    { rel: 'icon', url: '/icons/favicon.svg' },
    { rel: 'shortcut-icon', url: '/icons/favicon.ico' },
  ],
};

// Define the props interface
interface RootLayoutProps {
  children: ReactNode; // Specify children as a ReactNode
}

// Root layout component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          color="white"
          href="/favicon.svg"
        />
        <meta name="apple-mobile-web-app-title" content="Pilgrim-App" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <DarkModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
