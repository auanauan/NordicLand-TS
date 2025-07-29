<script setup>
import { logos } from '../utils/svgData.js'
</script>

<template>
  <footer class="footer">
    <div class="footer-top">
      <h1 class="brand">NORDIC<img :src="logos.goldLogo"></img>LAND</h1>
    </div>

    <div class="footer-links">
      <ul>
        <li>About Us</li>
        <li>Services</li>
        <li>Case Studies</li>
      </ul>
      <ul>
        <li>Products</li>
        <li>Custom Projects</li>
        <li>SEO Services</li>
      </ul>
      <ul>
        <li>Strategy</li>
        <li>Unlimited Design</li>
        <li>Support</li>
      </ul>
      <ul>
        <li>Blog</li>
        <li>Contact</li>
        <li>Legal</li>
      </ul>
    </div>

    <div class="footer-bottom">
      <p>proudly made in <span>bangkok</span></p>
      <div class="footer-icons">
        <a href="#"><i class="fab fa-facebook-f" /></a>
        <a href="#"><i class="fab fa-instagram" /></a>
        <a href="#"><i class="fab fa-line" /></a>
      </div>
      <p class="footer-note">hey pal. don’t steal our stuff, be cool.</p>
    </div>
  </footer>
</template>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

.footer {
  background-color: #273b2e;
  color: #f5f5ed;
  padding: 60px 30px;
  text-align: center;
  font-family: 'Georgia', 'Noto Serif Thai', serif;
}

.footer-top .brand {
  font-size: 64px;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 40px;
}

.footer-top .brand img {
  width: 100px;
  height: auto;
  vertical-align: middle;
  margin: 0 8px;
  position: relative;
  top: -10px;
}

.footer-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-bottom: 40px;
}

.footer-links ul {
  list-style: none;
  padding: 0;
}

.footer-links li {
  font-size: 16px;
  line-height: 2;
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-links li:hover {
  color: #fff;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
}

.footer-bottom span {
  font-style: italic;
  font-weight: bold;
  color: #f5f5f5;
}

.footer-icons {
  margin: 16px 0;
}

.footer-icons a {
  color: #aaa;
  margin: 0 10px;
  font-size: 18px;
  transition: color 0.3s ease;
}

.footer-icons a:hover {
  color: white;
}

.footer-note {
  margin-top: 12px;
  font-size: 12px;
  color: #666;
}
</style>
