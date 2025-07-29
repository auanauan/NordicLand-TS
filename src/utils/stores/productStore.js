import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    loading: false,
    error: null,
    searchKeyword: "",
    category: "All",
  }),

  actions: {
    async loadProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = response.data;
      } catch (err) {
        this.error = err.message || "Error loading products";
      } finally {
        this.loading = false;
      }
    },
    setSearchKeyword(keyword) {
      this.searchKeyword = keyword.toLowerCase();
    },
    setCategory(category) {
      this.category = category;
    },
  },

  getters: {
    filteredProducts(state) {
      const selectedCat = state.category.toLowerCase();
      return state.products.filter((product) => {
        const productCat = product.category?.name.toLowerCase() || "";
        const matchCategory =
          selectedCat === "all" || productCat === selectedCat;
        const matchSearch =
          product.title.toLowerCase().includes(state.searchKeyword) ||
          product.description?.toLowerCase().includes(state.searchKeyword);
        return matchCategory && matchSearch;
      });
    },
  },
});
