import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-right-top bg-custom-imagem bg-no-repeat">
        <div className="w-full h-screen max-h-screen flex items-center justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
