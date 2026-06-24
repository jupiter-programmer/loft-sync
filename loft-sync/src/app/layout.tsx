import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { AppThemeProvider } from '@/providers';
import { TopLoader } from '@/components/ui';
// font
const spaceGrotesk = Space_Grotesk ({
  variable: '--space-grotesk',
  subsets: ['latin'],
});
// metadata
export const metadata: Metadata = {
  title: 'LoftSync | Pigeon Loft Management Software',
  description: 'Pigeon Loft Management Software.',
};
// root
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={spaceGrotesk.variable}>
      <AppThemeProvider>
        <body>
          <TopLoader/>
          { children }
        </body>
      </AppThemeProvider>
    </html>
  );
};