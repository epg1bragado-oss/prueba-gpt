'use client'
import { useEffect, useState } from "react"

export default function Dashboard() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("http://localhost:4000/api/resumen")
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Ejecutivo</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Ventas ARS</p>
          <p className="text-2xl font-bold">{data?.ventas || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Ganancia</p>
          <p className="text-2xl font-bold">{data?.ganancia || 0}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow">
          <p className="text-sm text-gray-500">Comisiones</p>
          <p className="text-2xl font-bold">{data?.comisiones || 0}</p>
        </div>
      </div>
    </div>
  )
}
