import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "English 7H Period 6",
  description: "glacier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/windows/favicon_blue.png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
