import "./globals.css"

export const metadata = {
  title: "iPhone Bragado PRO",
  description: "Sistema SaaS Retail Profesional"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="flex">
        <aside className="w-64 h-screen bg-white shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold">iPhone Bragado</h2>
          <nav className="space-y-2 text-sm">
            <a href="/" className="block hover:font-semibold">Dashboard</a>
            <a href="/ventas" className="block hover:font-semibold">Ventas</a>
            <a href="/inventario" className="block hover:font-semibold">Inventario</a>
          </nav>
        </aside>
        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  )
}
