import "./globals.css";
import NavBar from "@/components/layout/NavBar";

export const metadata = {
  title: "Akshara",
  description: "Learn Telugu Fast"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (<html lang="en"> <body>

    <NavBar />

    <main className="p-6">
      {children}
    </main>

  </body>
  </html>

  );
}
