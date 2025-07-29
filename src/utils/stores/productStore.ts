import { defineStore } from "pinia";
import axios from "axios";

// กำหนด type ของ Category
interface Category {
  id: number;
  name: string;
}

// กำหนด type ของ Product
interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  category?: Category;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  searchKeyword: string;
  category: string;
}

export const useProductStore = defineStore("product", {
  state: (): ProductState => ({
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
        const response = await axios.get<Product[]>(
          "https://api.escuelajs.co/api/v1/products"
        );
        this.products = response.data;
      } catch (err: any) {
        this.error = err.message || "Error loading products";
      } finally {
        this.loading = false;
      }
    },
    setSearchKeyword(keyword: string) {
      this.searchKeyword = keyword.toLowerCase();
    },
    setCategory(category: string) {
      this.category = category;
    },
  },

  getters: {
    filteredProducts(state): Product[] {
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
