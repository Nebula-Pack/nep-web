// src/app/layout.tsx
import '../styles/globals.css';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body className="bg-primary text-white">
      <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
      </body>
      </html>
  );
}
