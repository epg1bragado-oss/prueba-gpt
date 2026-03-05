import { getSupabase } from "@/lib/supabase"

export default async function Dashboard() {
  const supabase = getSupabase()

  const { data } = await supabase
    .from("dashboard_resumen_mes")
    .select("*")
    .order("mes", { ascending: false })
    .limit(1)
    .single()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Ejecutivo</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-gray-500">Ventas ARS</p>
          <p className="text-2xl font-bold">{data?.total_venta_ars ?? 0}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-gray-500">Ganancia</p>
          <p className="text-2xl font-bold">{data?.total_ganancia_ars ?? 0}</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-gray-500">Comisiones</p>
          <p className="text-2xl font-bold">{data?.total_comision_ars ?? 0}</p>
        </div>
      </div>
    </div>
  )
}
