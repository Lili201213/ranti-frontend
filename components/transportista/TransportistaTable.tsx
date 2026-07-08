import { Transportista } from "@/types/transportista";

interface Props {
  transportistas: Transportista[];
}

export default function TransportistaTable({ transportistas }: Props) {
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl shadow-xl bg-white">

      <table className="min-w-full">

        <thead className="bg-blue-800 text-white">

          <tr>
            <th className="px-6 py-4 text-left">DNI</th>
            <th className="px-6 py-4 text-left">Nombres</th>
            <th className="px-6 py-4 text-left">Apellidos</th>
            <th className="px-6 py-4 text-left">Correo</th>
            <th className="px-6 py-4 text-left">Celular</th>
            <th className="px-6 py-4 text-left">Licencia</th>
            <th className="px-6 py-4 text-left">Tipo</th>
            <th className="px-6 py-4 text-center">Estado</th>
          </tr>

        </thead>

        <tbody>

          {transportistas.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="text-center py-8 text-gray-500"
              >
                No existen transportistas registrados.
              </td>
            </tr>
          ) : (
            transportistas.map((t, index) => (
              <tr
                key={t.idTransportista}
                className={`border-b hover:bg-slate-100 transition ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <td className="px-6 py-4">{t.dni}</td>

                <td className="px-6 py-4 font-semibold text-slate-700">
                  {t.nombres}
                </td>

                <td className="px-6 py-4">{t.apellidos}</td>

                <td className="px-6 py-4">{t.correo}</td>

                <td className="px-6 py-4">{t.celular}</td>

                <td className="px-6 py-4">{t.licencia}</td>

                <td className="px-6 py-4">{t.tipoLicencia}</td>

                <td className="px-6 py-4 text-center">
                  {t.estado ? (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Activo
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Inactivo
                    </span>
                  )}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}