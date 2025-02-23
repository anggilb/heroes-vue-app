<script setup>
import { ref } from 'vue'
import HeartIcon from './components/HeartIcon.vue'
import BaseCard from './components/BaseCard.vue'

const heroes = ref([])
const favs = ref([])
let allHeroes = []

const loadData = async () => {
  const response = await fetch(
    'https://akabab.github.io/superhero-api/api/all.json',
  )
  const rawData = await response.json()
  console.log(rawData)
  const mappingHeroes = rawData.map(heroe => ({
    id: heroe.id,
    name: heroe.name,
    url: heroe.images.md,
    publisher: heroe.biography.publisher,
  }))

  heroes.value = mappingHeroes
  allHeroes = mappingHeroes
}

const searchHeroe = event => {
  const value = event.target.value
  heroes.value = allHeroes.filter(heroe =>
    heroe.name.toLowerCase().includes(value.toLowerCase()),
  )
}

const toggleFav = heroeId => {
  const index = favs.value.indexOf(heroeId)
  if (index > -1) {
    favs.value.splice(index, 1)
  } else {
    favs.value.push(heroeId)
  }
}

loadData()
</script>

<template>
  <h1>Heroe Search</h1>

  <input
    class="input input-bordered w-full max-w-xs"
    type="text"
    placeholder="Seek Heroe..."
    @input="searchHeroe"
  />

  <section class="container">
    <BaseCard v-for="heroe in heroes" :key="heroe.id" :heroe="heroe" />
  </section>
</template>

<style scoped>
.base-input {
  padding: 5px 8px;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid lightblue;
  border-radius: 8px;
  margin: 5px;
  position: relative;
  max-width: 350px;
  padding: 10px;
  align-items: center;
}
.card .icon {
  width: 30px;
  color: black;
  position: absolute;
  right: 15px;
  cursor: pointer;
}
.card .icon.selected {
  color: red;
}
.card .icon:hover {
  opacity: 0.75;
}
.card img {
  width: 180px;
}
</style>
