import { Transportista } from "@/types/transportista";

const transportistaService = {
  async obtenerTodos(): Promise<Transportista[]> {
    return [];
  },

  async crear(transportista: Transportista): Promise<void> {
    console.log("Transportista a registrar:", transportista);
  },

  async actualizar(transportista: Transportista): Promise<void> {
    console.log("Transportista actualizado:", transportista);
  },

  async eliminar(idTransportista: number): Promise<void> {
    console.log("Eliminar transportista:", idTransportista);
  },
};

export default transportistaService;