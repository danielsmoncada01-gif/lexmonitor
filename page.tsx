import Link from "next/link";

const clients = [
  { name: "Cliente de prueba 01", email: "cliente01@example.test", cases: 2 },
  { name: "Cliente de prueba 02", email: "cliente02@example.test", cases: 1 },
];

export default function ClientsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b bg-white"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><div><Link href="/" className="text-sm text-slate-500">← Dashboard</Link><h1 className="mt-2 text-2xl font-bold">Clientes</h1></div><button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">Nuevo cliente</button></div></header>
      <section className="mx-auto max-w-7xl px-6 py-8"><div className="overflow-hidden rounded-xl border bg-white shadow-sm"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-slate-500"><tr><th className="px-5 py-3">Cliente</th><th className="px-5 py-3">Correo</th><th className="px-5 py-3">Procesos</th></tr></thead><tbody>{clients.map(c => <tr key={c.name} className="border-t"><td className="px-5 py-4 font-medium">{c.name}</td><td className="px-5 py-4 text-slate-600">{c.email}</td><td className="px-5 py-4">{c.cases}</td></tr>)}</tbody></table></div><p className="mt-4 text-xs text-slate-500">Datos ficticios de desarrollo. La persistencia y autenticación se incorporarán antes de usar información real.</p></section>
    </main>
  );
}
