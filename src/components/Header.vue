<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { logos } from '../utils/svgData.js';

const scrollY = ref(0);
const isScrolledEnough = computed(() => scrollY.value > 80);
const isSidebarOpen = ref(false);

const onScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

// ใช้ computed properties สำหรับ src รูปภาพทั้งหมด
const logoSrc = computed(() => (isScrolledEnough.value ? logos.blackLogo : logos.goldLogo));
const searchSrc = computed(() => (isScrolledEnough.value ? logos.searchBlack : logos.searchWhite));
const btnHamburgerSrc = computed(() => (isScrolledEnough.value ? logos.btnHamburgerBlack : logos.btnHamburgerWhite));
</script>

<template>
  <header id="main-header" class="header" :class="{ scrolled: isScrolledEnough }">
    <div class="nav-wrapper" :class="{ scrolled: isScrolledEnough }">
      <div class="nav-inner">
        <button id="hamburger" type="button" class="icon-btn" :style="{ color: isScrolledEnough ? '#000' : '#fff' }"
          @click="toggleSidebar">
          <span><img :src="btnHamburgerSrc" width="24" height="24" /></span>
        </button>

        <a href="/" class="logo-center">
          <img id="logoImage" class="logo" :src="logoSrc" alt="logo" />
        </a>

        <div class="search-container">
          <span class="search-icon">
            <img id="SearchImage" :src="searchSrc" width="32" height="32" alt="search icon" />
          </span>
        </div>
      </div>
    </div>
  </header>

  <div :class="['sidebar', { 'sidebar--open': isSidebarOpen }]">
    <div class="sidebar-close">
      <button @click="toggleSidebar" class="sidebar-close-btn" style="font-family: 'Noto Sans Thai', sans-serif;">
        <span class="iconify" data-icon="mdi:close" style="font-size: 32px"></span>
        Close
      </button>
    </div>
    <nav class="sidebar-menu">
      <ul>
        <li><router-link to="/" @click="toggleSidebar">HomePage</router-link></li>
        <li><router-link to="/products" @click="toggleSidebar">All Products</router-link></li>
        <li><router-link to="/about" @click="toggleSidebar">About</router-link></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div v-if="isSidebarOpen" class="sidebar-backdrop" @click="toggleSidebar"></div>
</template>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: transparent;
  z-index: 9000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  header {
    height: 112px;
  }
}

.header.scrolled {
  position: fixed;
  top: 8px;
  padding: 8px 24px;
}

/* Gradient และ Blur overlay หากใช้ก็ใส่ได้ */
.overlay-gradient {
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 20;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent);
  pointer-events: none;
}

.overlay-blur {
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(10px);
  mask-image: linear-gradient(rgba(255, 255, 255, 0.5) 70%, transparent 100%);
  pointer-events: none;
}

@media (min-width: 768px) {

  .overlay-gradient,
  .overlay-blur {
    height: 112px;
  }
}

/* ก่อน scroll */
.nav-wrapper {
  position: relative;
  /* อื่น ๆ */
  width: 100%;
  padding: 10px 24px 16px;
  transition: all 0.3s ease;
}

/* ตอน scroll */
.nav-wrapper.scrolled {
  position: fixed;
  /* ทำ sticky */
  top: 8px;
  /* ระยะห่างจาก top */
  left: 50%;
  /* จัดกึ่งกลาง */
  transform: translateX(-50%);
  width: calc(100% - 48px);
  /* เผื่อ padding ซ้ายขวา */
  max-width: 1280px;
  /* กำหนด max width */
  padding: 8px 24px 16px;
  z-index: 9999;
}

/* .nav-inner มี radius + background + shadow ตอน scroll */
.nav-wrapper.scrolled .nav-inner {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 24px rgba(19, 19, 23, 0.12);
  border-radius: 40px;
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .nav-wrapper {
    padding: 10px 80px 16px;
  }
}

/* Nav Inner */
.nav-inner {
  width: 100%;
  max-width: 1280px;
  height: 58px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 40px;
  background: transparent;
  position: relative;
  transition: all 0.3s ease;
}

.scrolled .nav-inner {
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 24px rgba(19, 19, 23, 0.12);
  border-radius: 40px;
  /* ใส่ radius ตรงนี้ */
}

/* โลโก้ */
.logo-center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  color: white;
  text-decoration: none;
}

/* ปุ่มไอคอน */
.icon-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  transition: transform 0.2s;
}

.icon-btn:hover {
  transform: scale(1.05);
}

.icon-btn svg,
.icon-btn img {
  height: 30px;
  width: auto;
  vertical-align: middle;
}

.icon-btn>span:last-child {
  font-family: 'Noto Sans Thai', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  font-style: normal;
}

/* Search */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

.search-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.search-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

#SearchImage {
  color: #fff;
}

.scrolled .search-input {
  display: inline-block;
}

/* -------- Sidebar Styles -------- */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 385px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px -8px 32px -8px rgba(160, 167, 200, 0.24);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
}

.sidebar--open {
  transform: translateX(0);
}

.sidebar-close-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px 32px;
  width: 100%;
  height: 80px;
  justify-content: flex-start;
}

.sidebar-menu {
  padding: 0 16px;
}

.sidebar-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-menu li {
  margin-bottom: 16px;
}

.sidebar-menu a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

/* -------- Backdrop -------- */
.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
}

/* logo */
.logo {
  width: 70px;
  height: auto;
}
</style>