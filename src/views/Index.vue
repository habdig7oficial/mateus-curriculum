<script setup lang="ts">
import { type Ref, ref } from "vue";

import Languages from "@/fake-api/langs-fake-api"
import Carousel from '@/components/Carousel.vue'
import NavBar from "@/components/NavBar.vue";
import Modal from "@/components/Modal.vue";
import Footer from "@/components/Footer.vue"

import type { carousel } from "@/components/Carousel.vue";

interface carousels {
  front: Array<carousel>,
  back: Array<carousel>,
  performance: Array<carousel>,
  db: Array<carousel>,  
  game_dev: Array<carousel>,  
}


let Areas: Array<string> = [
  "Frontend (Web)",
  "Backend (Web)",
  "Database",
  "High Performance Apps",
  "Game Development",
]

let carouselObj: carousels = { front: [], back: [], performance: [], db: [], game_dev: []}

for (let i = 0; i < Languages.length; i++) {
  
  if (Languages[i].used_for.includes("Frontend (Web)")) {
    carouselObj.front?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
    })
  }

  if (Languages[i].used_for.includes("Backend (Web)")) {
    carouselObj.back?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
    })
  }

  if (Languages[i].used_for.includes("Database")) {
    carouselObj.db?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
    })
  }

  if (Languages[i].used_for.includes("High Performance Apps")) {
    carouselObj.performance?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
    })
  }

  if (Languages[i].used_for.includes("Game Development")) {
    carouselObj.game_dev?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
    })
  }

}

console.log(carouselObj)


let selected_area: Ref<number> = ref(0);

</script>

<template>
  <NavBar />
  <main class="text-bg-dark">
    <h1 class="text-center pt-3 neon-title">Mateus Vieira</h1>
    <h4 class="text-center mb-5">Junior Analist</h4>

    <!--
    <div class="my-5" style="max-width: 50%;">
      <Acordion />
    </div>
  -->

  <h3 class="my-5 text-center"> Tecnologies that I use: </h3>

    <div class="d-flex my-5 justify-content-center flex-wrap">
      <a v-for="(area, i) of Areas" @click="selected_area = i; console.log(i)"
        :class="{ 'btn mx-1': true, 'btn-success': (selected_area == i) }"> {{ area }} </a>
    </div>

    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Frontend (Web)')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_item_target="#exampleModal" carousel_id="front" :carousel="carouselObj.front" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Backend (Web)')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="back" :carousel="carouselObj.back" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Database')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="database" :carousel="carouselObj.db" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('High Performance Apps')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="performace" :carousel="carouselObj.performance" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Game Development')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="game_dev" :carousel="carouselObj.game_dev" />
        </div>
      </div>
    </Transition>

    <div>
      <Modal v-for="(i) of carouselObj.front" title="teste" />
    </div>

  </main>

  <Footer />
</template>
