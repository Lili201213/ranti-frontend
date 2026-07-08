"use client";

import { useEffect, useState } from "react";
import { Transportista } from "@/types/transportista";

interface Props {
  onGuardar: (transportista: Omit<Transportista, "idTransportista">) => void;
  transportistaEditar?: Transportista | null;
}

export default function TransportistaForm({
  onGuardar,
  transportistaEditar,
}: Props) {

  const [formulario, setFormulario] = useState({
    dni: "",
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    licencia: "",
    tipoLicencia: "A-I",
    estado: true,
  });


  const [errores, setErrores] = useState({
    dni: "",
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    licencia: "",
  });


  // Cargar datos cuando se presiona EDITAR
  useEffect(() => {

    if (transportistaEditar) {

      setFormulario({
        dni: transportistaEditar.dni,
        nombres: transportistaEditar.nombres,
        apellidos: transportistaEditar.apellidos,
        correo: transportistaEditar.correo,
        celular: transportistaEditar.celular,
        licencia: transportistaEditar.licencia,
        tipoLicencia: transportistaEditar.tipoLicencia,
        estado: transportistaEditar.estado,
      });

    }

  }, [transportistaEditar]);



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: name === "estado" ? value === "true" : value,
    });

  };



  const guardar = () => {

    const nuevosErrores = {
      dni: "",
      nombres: "",
      apellidos: "",
      correo: "",
      celular: "",
      licencia: "",
    };


    let valido = true;


    if (!/^\d{8}$/.test(formulario.dni)) {
      nuevosErrores.dni = "El DNI debe tener 8 dígitos.";
      valido = false;
    }


    if (formulario.nombres.trim() === "") {
      nuevosErrores.nombres = "Ingrese los nombres.";
      valido = false;
    }


    if (formulario.apellidos.trim() === "") {
      nuevosErrores.apellidos = "Ingrese los apellidos.";
      valido = false;
    }


    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!correoRegex.test(formulario.correo)) {
      nuevosErrores.correo = "Ingrese un correo válido.";
      valido = false;
    }


    if (!/^\d{9}$/.test(formulario.celular)) {
      nuevosErrores.celular = "El celular debe tener 9 dígitos.";
      valido = false;
    }


    if (formulario.licencia.trim() === "") {
      nuevosErrores.licencia = "Ingrese la licencia.";
      valido = false;
    }


    setErrores(nuevosErrores);


    if (!valido) return;



    onGuardar(formulario);



    setFormulario({
      dni: "",
      nombres: "",
      apellidos: "",
      correo: "",
      celular: "",
      licencia: "",
      tipoLicencia: "A-I",
      estado: true,
    });


  };



  return (

    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mt-8">


      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        {transportistaEditar 
          ? "Editar Transportista" 
          : "Registrar Transportista"}
      </h2>


      <p className="text-gray-500 mb-8">
        Complete la información del transportista.
      </p>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


        {[
          ["dni","DNI"],
          ["nombres","Nombres"],
          ["apellidos","Apellidos"],
          ["correo","Correo"],
          ["celular","Celular"],
          ["licencia","Licencia"]
        ].map(([campo,label]) => (

          <div key={campo}>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {label}
            </label>


            <input
              type="text"
              name={campo}
              value={(formulario as any)[campo]}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:ring-2 focus:ring-blue-600"
            />


            {(errores as any)[campo] && (
              <p className="text-red-500 text-sm mt-1">
                {(errores as any)[campo]}
              </p>
            )}

          </div>

        ))}



        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tipo de Licencia
          </label>


          <select
            name="tipoLicencia"
            value={formulario.tipoLicencia}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          >

            <option>A-I</option>
            <option>A-IIa</option>
            <option>A-IIb</option>
            <option>A-IIIa</option>
            <option>A-IIIb</option>
            <option>A-IIIc</option>

          </select>

        </div>




        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Estado
          </label>


          <select
            name="estado"
            value={formulario.estado.toString()}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3"
          >

            <option value="true">
              Activo
            </option>

            <option value="false">
              Inactivo
            </option>


          </select>

        </div>



      </div>



      <div className="flex justify-end mt-8">


        <button
          onClick={guardar}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
        >

          {transportistaEditar 
            ? "Actualizar Transportista" 
            : "Guardar Transportista"}

        </button>


      </div>


    </div>

  );

}