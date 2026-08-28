import Link from "next/link";

const proceedings = [
  { date: "18/06/2024", type: "Auto", description: "Actuación de prueba registrada manualmente.", source: "DEMO" },
  { date: "27/08/2026", type: "Estado", description: "Nueva actuación de prueba para validar el historial.", source: "DEMO" },
];

export default function ProceedingsPage() {
  return <main className="min-h-screen bg-slate-50"><header className="border-b bg-white"><div className="mx-auto max-w-7xl px-6 py-5"><Link href="/" className="text-sm text-slate-500">← Dashboard</Link><h1 className="mt-2 text-2xl font-bold">Actuaciones</h1><p className="mt-1 text-sm text-slate-500">Historial normalizado de actuaciones.</p></div></header><section className="mx-auto max-w-7xl px-6 py-8"><div className="overflow-hidden rounded-xl border bg-white shadow-sm"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="px-5 py-3">Fecha</th><th className="px-5 py-3">Tipo</th><th className="px-5 py-3">Descripción</th><th className="px-5 py-3">Fuente</th></tr></thead><tbody>{proceedings.map((p, i) => <tr key={i} className="border-t"><td className="px-5 py-4 whitespace-nowrap">{p.date}</td><td className="px-5 py-4 font-medium">{p.type}</td><td className="px-5 py-4 text-slate-600">{p.description}</td><td className="px-5 py-4 text-xs font-semibold">{p.source}</td></tr>)}</tbody></table></div></section></main>;
}
