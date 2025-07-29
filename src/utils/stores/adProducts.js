import { defineStore } from "pinia";
import axios from "axios";

export const adProductStore = defineStore("productStore", {
  state: () => ({
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
        const response = await axios.get(
          "https://fakestoreapi.in/api/products",
          { timeout: 5000 }
        );
        this.products = response.data;
      } catch (err) {
        this.error = err.message || "Error fetching products";
      } finally {
        this.loading = false;
      }
    },
  },
});
