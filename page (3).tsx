import Link from "next/link";

const stats = [
  { label: "Procesos activos", value: "2" },
  { label: "Actuaciones nuevas", value: "1" },
  { label: "Términos próximos", value: "0" },
];

export default function Home() {
  return <main className="min-h-screen bg-slate-50"><header className="border-b bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><div><h1 className="text-2xl font-bold tracking-tight">LexMonitor</h1><p className="text-sm text-slate-500">Gestión y vigilancia de procesos judiciales</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">MVP 0.2</span></div></header><section className="mx-auto max-w-7xl px-6 py-8"><div className="grid gap-4 md:grid-cols-3">{stats.map(s => <div key={s.label} className="rounded-xl border bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">{s.label}</p><p className="mt-2 text-3xl font-bold">{s.value}</p></div>)}</div><div className="mt-8 grid gap-4 md:grid-cols-3"><Link href="/clientes" className="rounded-xl border bg-white p-5 shadow-sm hover:bg-slate-50"><b>Clientes</b><p className="mt-1 text-sm text-slate-500">Administrar clientes de prueba.</p></Link><Link href="/procesos" className="rounded-xl border bg-white p-5 shadow-sm hover:bg-slate-50"><b>Procesos</b><p className="mt-1 text-sm text-slate-500">Registrar y consultar procesos.</p></Link><Link href="/actuaciones" className="rounded-xl border bg-white p-5 shadow-sm hover:bg-slate-50"><b>Actuaciones</b><p className="mt-1 text-sm text-slate-500">Consultar historial.</p></Link></div><section className="mt-8 rounded-xl border border-dashed bg-white p-6"><h2 className="text-lg font-semibold">Monitor judicial</h2><p className="mt-2 text-sm leading-6 text-slate-600">Motor de monitorización preparado mediante adaptadores. La conexión a fuentes de la Rama Judicial se implementará después de validar el mecanismo técnico de consulta.</p><div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm"><b>Estado:</b> <span className="font-medium">En desarrollo</span></div></section></section></main>;
}
