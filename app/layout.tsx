import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const stackSans = localFont({
  src: [
    { path: "../public/fonts/StackSansNotch-VariableFont_wght.ttf", weight: "200 700" },
    { path: "../public/fonts/StackSansNotch-ExtraLight.ttf", weight: "200" },
    { path: "../public/fonts/StackSansNotch-Light.ttf", weight: "300" },
    { path: "../public/fonts/StackSansNotch-Regular.ttf", weight: "400" },
    { path: "../public/fonts/StackSansNotch-Medium.ttf", weight: "500" },
    { path: "../public/fonts/StackSansNotch-SemiBold.ttf", weight: "600" },
    { path: "../public/fonts/StackSansNotch-Bold.ttf", weight: "700" },
  ],
  variable: "--font-stack-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Form Filler - Crush Your Placement Season",
  description: "The ultimate browser extension for students. Auto-fill internship and job applications in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stackSans.variable} font-sans antialiased bg-neutral-50 text-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
