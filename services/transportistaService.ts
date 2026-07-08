import { Transportista } from "@/types/transportista";

const transportistaService = {
  async obtenerTodos(): Promise<Transportista[]> {
    return [];
  },

  async crear(transportista: Transportista): Promise<void> {
    console.log("Transportista a registrar:", transportista);
  },
};

export default transportistaService;