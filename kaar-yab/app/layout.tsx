import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
});

// dynamic metadata
export const metadata: Metadata = {
  // this placeholder will have the future vercel link
  // metadataBase: new URL("https://kaaryab.vercel.app"),
  title: {
    default: "KaarYab Afghanistan",
    template: "%s | KaarYab Afghanistan",
  },
  description:
    "Find jobs, internships, scholarships, remote work, and training opportunities.",
  applicationName: "KaarYab Afghanistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: 3000,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}