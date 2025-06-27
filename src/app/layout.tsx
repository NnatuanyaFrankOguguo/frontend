import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import  Header  from '@/components/Header';
import  Footer  from '@/components/Footer';
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roy's Photos",
  description: "Experience the world through Roy's lens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
>
        <div className="min-h-screen bg-[#121212] text-[#F5F5F5] font-sans">
          
          <Header />
          
          <main>{children}</main>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
