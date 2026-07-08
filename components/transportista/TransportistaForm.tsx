"use client";

import { useState } from "react";

interface Props {
  onGuardar: (transportista: {
    dni: string;
    nombres: string;
    apellidos: string;
    correo: string;
    celular: string;
    licencia: string;
    tipoLicencia: string;
    estado: boolean;
  }) => void;
}

export default function TransportistaForm({ onGuardar }: Props) {
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

  setErrores({
    dni: "",
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    licencia: "",
  });
};

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 mt-8">

      <h2 className="text-3xl font-bold text-slate-800 mb-2">
        Registrar Transportista
      </h2>

      <p className="text-gray-500 mb-8">
        Complete la información del nuevo transportista.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            DNI
          </label>
          <input
            type="text"
            name="dni"
            value={formulario.dni}
            onChange={handleChange}
            placeholder="Ingrese el DNI"
            className={`w-full rounded-lg p-3 outline-none transition duration-200 ${
  errores.dni
    ? "border-2 border-red-500 focus:ring-2 focus:ring-red-400"
    : "border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
}`}
          />
          {errores.dni && (
  <p className="text-red-500 text-sm mt-1">
    {errores.dni}
  </p>
)}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nombres
          </label>
          <input
            type="text"
            name="nombres"
            value={formulario.nombres}
            onChange={handleChange}
            placeholder="Ingrese los nombres"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
          {errores.nombres && (
  <p className="text-red-500 text-sm mt-1">
    {errores.nombres}
  </p>
)}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Apellidos
          </label>
          <input
            type="text"
            name="apellidos"
            value={formulario.apellidos}
            onChange={handleChange}
            placeholder="Ingrese los apellidos"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
          {errores.apellidos && (
  <p className="text-red-500 text-sm mt-1">
    {errores.apellidos}
  </p>
)}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Correo
          </label>
          <input
            type="email"
            name="correo"
            value={formulario.correo}
            onChange={handleChange}
            placeholder="correo@ejemplo.com"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
          {errores.correo && (
  <p className="text-red-500 text-sm mt-1">
    {errores.correo}
  </p>
)}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Celular
          </label>
          <input
            type="text"
            name="celular"
            value={formulario.celular}
            onChange={handleChange}
            placeholder="987654321"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
          {errores.celular && (
  <p className="text-red-500 text-sm mt-1">
    {errores.celular}
  </p>
)}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Licencia
          </label>
          <input
            type="text"
            name="licencia"
            value={formulario.licencia}
            onChange={handleChange}
            placeholder="Número de licencia"
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Tipo de Licencia
          </label>

          <select
            name="tipoLicencia"
            value={formulario.tipoLicencia}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
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
            className="w-full rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
          >
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>

      </div>

      <div className="flex justify-end mt-8">

        <button
          onClick={guardar}
          className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition duration-300"
        >
          Guardar Transportista
        </button>

      </div>

    </div>
  );
}