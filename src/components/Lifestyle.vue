<script setup>
import { onMounted, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useProductStore } from '../utils/stores/productStore'

const productStore = useProductStore()

const isLoading = computed(() => productStore.products.length === 0)

onMounted(() => {
  productStore.loadProducts()
})
</script>

<template>
  <section class="section-container">
    <!-- ...ส่วนหัวเหมือนเดิม... -->

    <div class="relative lifestyle-container">
      <div v-if="isLoading" class="loading-text">กำลังโหลดข้อมูล...</div>

      <swiper v-else :slides-per-view="3" :space-between="25" class="mySwiper" navigation pagination>
        <swiper-slide v-for="(item, index) in productStore.products" :key="index">
          <div class="slide-group" :data-aos-delay="index * 100" data-aos="flip-left" data-aos-duration="1000">
            <a :href="`/product/${item.id}`">
              <div class="image-wrapper">
                <img :src="item.images[0]" class="slide-image" />
                <div class="icon-overlay">
                  <span class="iconify i-icon:arrow-right-up" style="font-size: 16px"></span>
                </div>
              </div>
              <div class="slide-text">
                <h1 class="slide-title">{{ item.title }}</h1>
                <div class="slide-desc">
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>

      <!-- ปุ่ม navigation เหมือนเดิม -->
      <div class="swiper-button-prev-custom swiper-nav-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="swiper-button-next-custom swiper-nav-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
}

.section-container {
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-bottom: 96px;
  gap: 20px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.text-block {
  text-align: left;
}

@media (max-width: 768px) {
  .text-block {
    text-align: center;
  }
}

.subtitle {
  font-size: 18px;
  color: #777;
  display: block;
  margin-bottom: 8px;
  line-height: 1.5;
}

.title {
  font-size: 32px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #111;
}

.sharp {
  color: #ef4444;
  font-weight: 700;
}

.description {
  padding-top: 0;
}

@media (max-width: 1024px) {
  .description {
    padding-top: 200px;
  }
}

@media (max-width: 768px) {
  .description {
    padding-top: 40px;
  }
}

.btn-outline {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 48px;
  border-radius: 9999px;
  border: 1px solid #921c1e;
  background-color: #fff;
  font-size: 0.875rem;
  font-weight: 500;
  color: #921c1e;
  text-decoration: none;
  box-shadow: 0 0 0 1px #921c1e, 0 0 0 2px #fff;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #921c1e;
    color: #fff;
  }
}

.lifestyle-container {
  position: relative;
}

.slide-group {
  height: auto;
  width: auto;
  border-radius: 9999px 9999px 0 0;
  transform: translateY(2rem);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
  margin-bottom: 20px;
}

.slide-group:hover {
  transform: translateY(0);
  margin-bottom: 0;
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 9999px 9999px 0 0;
  transition: transform 0.5s ease;
}

.slide-group:hover .slide-image {
  transform: scale(1.05);
}

.icon-overlay {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #ef4444;
  padding: 16px;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
  color: white;
}

.slide-group:hover .icon-overlay {
  opacity: 1;
}

.arrow-icon {
  font-size: 16px;
}

.slide-text {
  background-color: white;
  padding: 28px 16px 20px 16px;
}

.slide-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #111;
}

.slide-desc {
  height: 96px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  line-height: 20px;
}

.swiper-nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  cursor: pointer;
}

.swiper-button-prev-custom {
  left: -20px;
}

.swiper-button-next-custom {
  right: -20px;
}

.loading-text {
  text-align: center;
  font-size: 18px;
  padding: 40px 0;
  color: #777;
}
</style>
