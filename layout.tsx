export const metadata = {
  title: "Ascend",
  description: "Le skill tree qui level-up ta vraie vie.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
