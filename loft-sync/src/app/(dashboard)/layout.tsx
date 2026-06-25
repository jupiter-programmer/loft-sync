import '../globals.css';
import DashboardRoot from './root';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { AppThemeProvider } from '@/providers';
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
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={spaceGrotesk.variable}>
      <AppThemeProvider>
        <body>
          <DashboardRoot>
            { children }
          </DashboardRoot>
        </body>
      </AppThemeProvider>
    </html>
  );
};