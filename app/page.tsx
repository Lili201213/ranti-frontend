import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">

      <div className="bg-white shadow-2xl rounded-2xl p-12 w-full max-w-3xl text-center">

        <h1 className="text-5xl font-bold text-blue-900">
          RANTI
        </h1>

        <p className="mt-3 text-gray-600 text-lg">
          Sistema de Gestión de Transporte y Logística
        </p>

        <div className="mt-10">

          <Link
            href="/transportistas"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg shadow-lg text-lg transition"
          >
            Ingresar al módulo de Transportistas
          </Link>

        </div>

      </div>

    </div>
  );
}