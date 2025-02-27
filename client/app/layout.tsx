import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/style.css";
import { ThemeProvider } from "@/components/Themes/theme-provider";
import { DockDemo } from "@/components/Custom/Dock";
import { AlertDialog } from "@radix-ui/react-alert-dialog";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Front-End-Devs",
   description: "Generated by Phong",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" id="root">
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               {/* <DockDemo /> */}
               {children}
               <Toaster />
            </ThemeProvider>
         </body>
      </html>
   );
}
