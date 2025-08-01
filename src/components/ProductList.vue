<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../utils/stores/productStore'

const productStore = useProductStore()

onMounted(() => {
  productStore.loadProducts()
})
</script>

<template>
  <section class="product-list">

    <div v-if="productStore.loading" class="loader-container">
      <span class="loader"></span>
    </div>

    <div class="products-grid">
      <div v-for="product in productStore.filteredProducts" :key="product.id" class="product-card">
        <div class="image-wrapper">
          <img :src="product.images[0]" :alt="product.title" />
        </div>
        <h3 class="product-name">{{ product.title }}</h3>
        <p class="product-price">{{ product.price.toLocaleString('en-US', { style: 'currency', currency: 'THB' }) }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-list {
  max-width: 1100px;
  margin: 2rem auto;
  padding: 0 1rem;
  padding-top: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}

.product-card {
  background-color: #f9fafb;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(27, 40, 56, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 6px 15px rgba(27, 40, 56, 0.2);
}

.image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1b2838;
  margin-bottom: 0.5rem;
  text-align: center;
}

.product-price {
  font-size: 1rem;
  color: #3a5871;
  font-weight: 500;
}

.loader {
    position: relative;
    width: 120px;
    height: 14px;
    border-radius: 0 0 15px 15px;
    background-color: #3e494d;
    box-shadow: 0 -1px 4px #5d6063 inset;
    animation: panex 0.5s linear alternate infinite;
    transform-origin: 170px 0;
    z-index: 10;
    perspective: 300px;

}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.loader::before {
  content: '';
  position: absolute;
  left: calc( 100% - 2px);
  top: 0;
  z-index: -2;
  height: 10px;
  width: 70px;
  border-radius: 0 4px 4px 0;
  background-repeat: no-repeat;
  background-image: linear-gradient(#6c4924, #4b2d21), linear-gradient(#4d5457 24px, transparent 0), linear-gradient(#9f9e9e 24px, transparent 0);
  background-size: 50px 10px , 4px 8px , 24px 4px;
  background-position: right center , 17px center , 0px center;
}
  .loader::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    z-index: -2;
    transform: translate(-50% , -20px) rotate3d(75, -2, 3, 78deg);
    width: 55px;
    height: 53px;
    background: #fff;
    background-image:
    radial-gradient(circle 3px , #fff6 90%, transparent 10%),
    radial-gradient(circle 12px , #ffc400 90%, transparent 10%),
    radial-gradient(circle 12px , #ffae00 100%, transparent 0);
    background-repeat: no-repeat;
    background-position: -4px -6px , -2px -2px , -1px -1px;
    box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
    border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
    animation: eggRst 1s ease-out infinite;
  }

@keyframes eggRst {
  0% ,  100%{  transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg); opacity: 0; }
  10% , 90% {  transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg); opacity: 1; }
  25%  {transform:  translate(-50% , -40px) rotate3d(85, 17, 2, 70deg) }
  75% {transform:  translate(-50% , -40px) rotate3d(75, -3, 2, 70deg) }
  50% {transform:  translate(-55% , -50px) rotate3d(75, -8, 3, 50deg) }
}
@keyframes panex {
  0%{  transform: rotate(-5deg)  }
  100%{  transform: rotate(10deg)  }
}
  
</style>
