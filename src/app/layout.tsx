import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "SLP Pink Studio",
  description: "Speech-Language Pathologist scheduling and notes application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            className: 'rounded-2xl shadow-soft',
            style: {
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#374151',
              backdropFilter: 'blur(8px)',
            },
          }}
        />
      </body>
    </html>
  );
}