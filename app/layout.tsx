import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IRIS WOODS - Premium Residential Plots',
  description: 'Premium NA residential plots near Hinjewadi Phase III, Ghotawade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        {/* Enquire Now Button */}
        <a
          href="#contact" // or your contact link
          className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          <button className="bg-[#097199] text-white font-bold py-2 px-3 rounded-l-md shadow-lg hover:bg-[#075a7a] transition duration-300">
            ENQUIRE NOW
          </button>
        </a>
      </body>
    </html>
  );
}
