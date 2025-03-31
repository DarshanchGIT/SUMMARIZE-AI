import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { Loader } from "@/components/common/Loader";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Summarize",
  description: "Summarize is an app for summarizing PDF Documents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.variable} font-sans antialiased`}
          style={{ fontFamily: "var(--font-poppins), sans-serif" }}
        >
          
            <Loader />
            {children}
            <Toaster richColors />
        </body>
      </html>
    </ClerkProvider>
  );
}
