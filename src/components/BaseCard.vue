<script setup>
defineProps({
  heroe: {
    type: Object,
    default: () => ({}),
  },
})
</script>

<template>
  <div class="card card-compact w-96 bg-base-100 shadow-xl">
    <figure>
      <img :src="heroe.url" alt="Heroe" />
    </figure>
    <div class="card-body">
      <div class="logo">
        <img
          v-if="heroe.publisher === 'Marvel Comics'"
          src="../assets/publishers/marvel.webp"
          height:100px
          alt="Marvel Logo"
        />
        <img
          v-if="heroe.publisher === 'DC Comics'"
          src="../assets/publishers/dc.webp"
          height:100px
          alt="DC Logo"
        />
        <img
          v-if="heroe.publisher === 'Dark Horse Comics'"
          src="../assets/publishers/darkHorse.webp"
          height:100px
          alt="Dark Horse Logo"
        />
        <img
          v-if="heroe.publisher === 'NBC - Heroes'"
          src="../assets/publishers/nbcHeroes.webp"
          height:100px
          alt="NBC Heroes Logo"
        />
        <img
          v-if="heroe.publisher === 'Wildstorm'"
          src="../assets/publishers/wildstorm.webp"
          height:100px
          alt="Wildstorm Logo"
        />
      </div>
      <h2 class="card-title">{{ heroe.name }}</h2>
    </div>
  </div>
</template>
