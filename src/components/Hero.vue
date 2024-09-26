<template>
    <div>
      <swiper
        :slides-per-view="1"
        :space-between="30"
        :centeredSlides="true"
        :autoplay="{
        delay: 2500,
        disableOnInteraction: true,
        }"
        :loop="true"
        :pagination="{ clickable: true }"
        :navigation="true"
        :modules="[Pagination, Navigation]"
        class="mySwiper"
      >
        <swiper-slide v-for="(hero,index) in heros" :key="index">
            <div   class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
        <img
          :src="hero.img"
          alt="Banner Image"
          class="absolute inset-0 w-full h-full object-cover"
        />
  
        <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h2 class="sm:text-4xl text-2xl font-bold mb-6"> {{ hero.title }} </h2>
          <p class="sm:text-lg text-base text-center text-gray-200">Embark on unforgettable journeys. Book your dream vacation today!</p>
  
          <button
            type="button"
            class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper/modules';
  import { ref } from 'vue';

  const heros = ref([
    {
        img: `https://parthlocal.s3.ap-south-1.amazonaws.com/rawMaterialItem/5768acbd-183b-441e-a97f-80b1594396dc.jpg`,
        title: 'Jewellery Brand'
    },
    {
        img: `https://parthlocal.s3.ap-south-1.amazonaws.com/rawMaterialItem/7cb00d8c-7b03-4c06-8ab2-07f00a00f591.jpg`,
        title: 'Our Collections'
    },
    {
        img: `https://parthlocal.s3.ap-south-1.amazonaws.com/rawMaterialItem/1f87465e-aa2b-4d77-bb0b-7e94346922d8.jpg`,
        title: 'Chain Makings'
    }
  ]);
  </script>
  
  <style>
  .swiper-button-prev{
    color: white !important;
  }
  .swiper-button-next{
    color: white !important;
  }
  .swiper-pagination-bullet{
    color: white !important;
    background: white; /* Bullet color */
    height: 10px;
    width: 10px;

  }
  
  </style>
  