<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import bg1 from '../../assets/image/background/fornitureBg.png'

const slides = [
  {
    title: "นอร์ดิกโฮม – เรียบง่ายมีสไตล์",
    description: "เลือกเฟอร์นิเจอร์ที่เติมเต็มบ้านของคุณอย่างอบอุ่น",
    image: bg1,
    bgColor: "#f5f3ef",
  },
  {
    title: "กลิ่นไลฟ์สไตล์แบบสแกนดิเนเวีย",
    description: "สร้างบรรยากาศสงบด้วยของตกแต่งคุณภาพ",
    image: bg1,
    bgColor: "#ece8e1",
  },
  {
    title: "โปรโมชั่นสุดพิเศษ ✨",
    description: "ลดราคาสินค้านอร์ดิกสูงสุด 50% วันนี้เท่านั้น",
    image: bg1,
    bgColor: "#edecec",
  },
];
</script>

<template>
  <div class="ad-slider">
    <Swiper
      :modules="[Autoplay]"
      :autoplay="{ delay: 4000 }"
      :loop="true"
      class="rounded-xl"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="slide" :style="{ background: slide.bgColor }">
          <div class="slide-content">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
            <button>ดูเพิ่มเติม</button>
          </div>
          <img :src="slide.image" alt="ad image" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.ad-slider {
  width: 100%;
  max-width: 900px;
  margin: auto;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2rem;
  height: 280px;
  border-radius: 20px;
  overflow: hidden;
}

.slide-content {
  max-width: 60%;
}

.slide-content h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.slide-content p {
  font-size: 0.9rem;
  color: #555;
}

.slide-content button {
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.9rem;
}

.slide img {
  width: 200px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
