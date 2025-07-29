<script lang="ts" setup>
import { ref } from 'vue'
import { logos } from '../utils/svgData'
import small from '../assets/video/small.mp4'
import { useProductStore } from '../utils/stores/productStore'

// กำหนด type ของ category เป็น string หรือถ้ารู้ชุดค่าที่แน่นอนสามารถทำเป็น union type ได้
type Category = 'All' | 'Clothes' | 'Electronics' | 'Furniture' | 'Shoes' | 'Miscellaneous'

const store = useProductStore()
const search = ref<string>('')

function handleSearch(): void {
  store.setSearchKeyword(search.value)
}

function clearSearch(): void {
  search.value = ''
  store.setSearchKeyword('')
}

function filterCategory(category: Category): void {
  store.setCategory(category)
}
</script>

<template>
  <section class="hero-section">
    <video class="video-bg" muted autoplay loop playsinline preload="metadata">
      <source :src="small" type="video/mp4" />
    </video>
    <div class="search-container">
      <div class="search-box">
        <span class="search-icon">
          <img :src="logos.searchWhite" alt="search icon" />
        </span>
        <input type="text" id="search-input" class="search-input" v-model="search" @blur="clearSearch"
          placeholder=" " />
        <div class="placeholder-text" v-show="!search" id="placeholder-text">
          <div class="scrolling-placeholder">
            <div>ค้นหาเสื้อผ้า, ที่คุณต้องการ</div>
            <div>เสื้อผ้า | ลดสูงสุด 5%</div>
            <div>อุปกรณ์อิเล็กทรอนิกส์| ลดสูงสุด 6%</div>
          </div>
        </div>
        <button @click="handleSearch" class="search-button">Search</button>
      </div>

      <div class="suggestion-container">
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('All')">All</a>
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('Clothes')">Clothes</a>
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('Electronics')">Electronics</a>
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('Furniture')">Furniture</a>
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('Shoes')">Shoes</a>
        <a href="#" class="suggestion-btn" @click.prevent="filterCategory('Miscellaneous')">Miscellaneous</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.hero-section::before,
.hero-section::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%;
  height: 120px;
  z-index: 1;
  pointer-events: none;
}

.hero-section::before {
  top: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent);
}

.hero-section::after {
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
}

.video-bg {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  display: block;
}

.search-container {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 700px;
  padding: 0 16px;
  z-index: 999;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 40px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.search-box:hover {
  transform: scale(1.02);
}

.search-icon {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.search-input {
  width: 100%;
  height: 100%;
  border: none;
  padding-left: 60px;
  padding-right: 140px;
  background: transparent;
  font-size: 16px;
  color: #ffffff;
  z-index: 3;
}

.search-input::placeholder {
  color: #ccc;
}

.placeholder-text {
  position: absolute;
  left: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: #eaeaea;
  font-size: 14px;
  overflow: hidden;
  width: calc(100% - 200px);
  z-index: 1;
}

.scrolling-placeholder {
  display: flex;
  flex-direction: column;
  animation: slide 6s infinite;
}

.scrolling-placeholder div {
  height: 56px;
  display: flex;
  align-items: center;
}

@keyframes slide {

  0%,
  20% {
    transform: translateY(0%);
  }

  33%,
  53% {
    transform: translateY(-100%);
  }

  66%,
  86% {
    transform: translateY(-200%);
  }

  100% {
    transform: translateY(0%);
  }
}

.search-button {
  position: absolute;
  right: 0;
  height: 56px;
  width: 140px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: transparent;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  cursor: pointer;
  font-family: 'Noto Sans Thai', sans-serif;
  transition: background 0.3s ease, transform 0.2s;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.search-button:hover {
  background: linear-gradient(to right, #f4e3b2, #b39c85);
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

@media screen and (min-width: 768px) {
  .search-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .placeholder-text {
    font-size: 16px;
  }
}

.suggestion-container {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.suggestion-btn {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 13px;
  padding: 6px 14px;
  border-radius: 999px;
  text-decoration: none;
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.suggestion-btn:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: rgba(255, 255, 255, 0.5);
  transform: scale(1.05);
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
}

.search-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
}

.search-input:focus,
.search-button:focus {
  outline: none;
  box-shadow: none;
}
</style>
