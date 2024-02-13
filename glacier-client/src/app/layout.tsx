import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "glacier desktop",
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
        <link rel="shortcut icon" href="/windows/glacier.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
