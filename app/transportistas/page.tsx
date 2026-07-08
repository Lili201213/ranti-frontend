"use client";

import { useEffect, useState } from "react";
import TransportistaForm from "@/components/transportista/TransportistaForm";
import TransportistaTable from "@/components/transportista/TransportistaTable";
import transportistaService from "@/services/transportistaService";
import { Transportista } from "@/types/transportista";

export default function Page() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [transportistas, setTransportistas] = useState<Transportista[]>([
    {
      idTransportista: 1,
      dni: "12345678",
      nombres: "Lili",
      apellidos: "Ramírez",
      correo: "lili@gmail.com",
      celular: "987654321",
      licencia: "Q12345",
      tipoLicencia: "A-IIb",
      estado: true,
    },
    {
      idTransportista: 2,
      dni: "87654321",
      nombres: "Ana",
      apellidos: "Pérez",
      correo: "ana@gmail.com",
      celular: "999888777",
      licencia: "Q54321",
      tipoLicencia: "A-IIIa",
      estado: false,
    },
  ]);

  useEffect(() => {
    const cargarTransportistas = async () => {
      const datos = await transportistaService.obtenerTodos();

      if (datos.length > 0) {
        setTransportistas(datos);
      }
    };

    cargarTransportistas();
  }, []);

  const agregarTransportista = (
    transportista: Omit<Transportista, "idTransportista">
  ) => {
    const nuevo: Transportista = {
      idTransportista: transportistas.length + 1,
      ...transportista,
    };

    setTransportistas([...transportistas, nuevo]);

    // Opcional: ocultar el formulario al guardar
    setMostrarFormulario(false);
  };

 return (
  <div className="min-h-screen bg-slate-100 py-10 px-6">
    <div className="max-w-7xl mx-auto">

      <div className="bg-white rounded-2xl shadow-xl p-8">

        <div className="flex items-center justify-between mb-8">

          <div>

            <h1 className="text-4xl font-bold text-slate-800">
  Gestión de Transportistas | Ranti
</h1>

            <p className="text-gray-500 mt-2">
              Administra los transportistas registrados en el sistema.
            </p>

          </div>

          <button
            onClick={() => setMostrarFormulario(!mostrarFormulario)}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            + Nuevo Transportista
          </button>

        </div>

        {mostrarFormulario && (
          <TransportistaForm onGuardar={agregarTransportista} />
        )}

        <TransportistaTable transportistas={transportistas} />

      </div>

    </div>
  </div>
);
}