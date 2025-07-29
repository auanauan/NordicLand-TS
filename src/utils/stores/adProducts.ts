import { defineStore } from "pinia";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useAdProductStore = defineStore("productStore", {
  state: (): State => ({
    products: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchProducts() {
      if (this.products.length > 0) return;
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<Product[]>(
          "https://fakestoreapi.in/api/products",
          { timeout: 5000 }
        );
        this.products = response.data;
      } catch (err: any) {
        this.error = err.message || "Error fetching products";
      } finally {
        this.loading = false;
      }
    },
  },
});
