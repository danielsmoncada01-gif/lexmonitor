import Link from "next/link";

const cases = [
  { number: "41001400300220240012300", client: "Cliente de prueba 01", court: "Juzgado 002 Civil Municipal de Neiva", status: "ACTIVO", last: "18/06/2024" },
  { number: "11001400300520250045600", client: "Cliente de prueba 02", court: "Juzgado 005 Civil Municipal de Bogotá", status: "ACTIVO", last: "27/08/2026" },
];

export default function CasesPage() {
  return <main className="min-h-screen bg-slate-50"><header className="border-b bg-white"><div className="mx-auto max-w-7xl px-6 py-5"><Link href="/" className="text-sm text-slate-500">← Dashboard</Link><div className="mt-2 flex items-center justify-between"><h1 className="text-2xl font-bold">Procesos</h1><button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">Registrar proceso</button></div></div></header><section className="mx-auto max-w-7xl px-6 py-8"><div className="grid gap-4">{cases.map(c => <article key={c.number} className="rounded-xl border bg-white p-5 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="font-mono text-sm font-semibold">{c.number}</p><h2 className="mt-2 font-semibold">{c.court}</h2><p className="mt-1 text-sm text-slate-500">Cliente: {c.client}</p></div><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">{c.status}</span></div><div className="mt-5 flex gap-6 border-t pt-4 text-sm"><span><b>Última actuación:</b> {c.last}</span><Link href="/actuaciones" className="font-medium underline">Ver actuaciones</Link></div></article>)}</div><p className="mt-4 text-xs text-slate-500">Datos ficticios de desarrollo. No introducir clientes reales todavía.</p></section></main>;
}
