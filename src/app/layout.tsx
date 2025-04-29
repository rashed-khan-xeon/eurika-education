import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eurika Education | Easy Gateway To Global Education",
  description: "Solution for your global education. Reach out for a free consultation on study visas for Canada, UK & more.",
  openGraph: {
    title: 'Home | Eurika Education',
    description: 'Visa processing made easy for international students.',
    url: 'https://eurikaeducation.com',
    siteName: 'Eurika Education',
    images: [
      {
        url: 'https://eurikaeducation.com/og-image.jpg', // 1200x630 recommended
        width: 1200,
        height: 630,
        alt: 'Eurika Education, Student Visa Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
