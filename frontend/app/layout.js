import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="flex">
        <aside className="w-64 h-screen bg-white shadow-xl p-6">
          <h2 className="text-xl font-bold mb-6">iPhone Bragado</h2>
        </aside>
        <main className="flex-1 p-10">{children}</main>
      </body>
    </html>
  )
}
