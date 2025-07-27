import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reddit Client | Custom Subreddit Lanes",
  description: "A customizable Reddit client with subreddit lanes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
