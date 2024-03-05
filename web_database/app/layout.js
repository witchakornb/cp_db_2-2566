import "./globals.css";
export const metadata = {
  title: 'login page',
  description: 'login page',
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo3.png"/>
      </head>
      <body>
          {children}
      </body>
    </html>
  );
}
