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
  "Front-end (Web)",
  "Back-end (Web)",
  "Database",
  "High Performance Apps",
  "Game Development",
]

type keys = "front" | "back" | "performance" | "db" | "game_dev"

let carouselObj: carousels = { front: [], back: [], performance: [], db: [], game_dev: [] }

for (let i = 0; i < Languages.length; i++) {

  if (Languages[i].used_for.includes("Front-end (Web)")) {
    carouselObj.front?.push({
      title: Languages[i].name,
      subtitle: Languages[i].learning_type,
      image: Languages[i].logo,
      carousel_item_target: `front-${Languages[i].nickname || Languages[i].name}`,
      frameworks: Languages[i].frameworks,
      score: Languages[i].score,
      learning_type: Languages[i].learning_type
    })
  }

  if (Languages[i].used_for.includes("Back-end (Web)")) {
    carouselObj.back?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
      carousel_item_target: `back-${Languages[i].nickname || Languages[i].name}`,
      frameworks: Languages[i].frameworks,
      score: Languages[i].score,
      learning_type: Languages[i].learning_type
    })
  }

  if (Languages[i].used_for.includes("Database")) {
    carouselObj.db?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
      carousel_item_target: `db-${Languages[i].nickname || Languages[i].name}`,
      frameworks: Languages[i].frameworks,
      score: Languages[i].score,
      learning_type: Languages[i].learning_type
    })
  }

  if (Languages[i].used_for.includes("High Performance Apps")) {
    carouselObj.performance?.push({
      title: Languages[i].name,
      subtitle: Languages[i].name,
      image: Languages[i].logo,
      carousel_item_target: `performance-${Languages[i].nickname || Languages[i].name}`,
      frameworks: Languages[i].frameworks,
      score: Languages[i].score,
      learning_type: Languages[i].learning_type
    })
  }

  if (Languages[i].used_for.includes("Game Development")) {
    if (Languages[i].name === "C#") {
      carouselObj.game_dev?.push({
        title: Languages[i].name,
        subtitle: Languages[i].name,
        image: Languages[i].logo,
        carousel_item_target: `game_dev-${Languages[i].nickname || Languages[i].name}`,
        frameworks: Languages[i].frameworks,
        score: Languages[i].score,
        learning_type: Languages[i].learning_type
      })
    }
  }

}

console.log(carouselObj)


let selected_area: Ref<number> = ref(0);

</script>

<template>
  <NavBar />
  <main class="text-bg-dark">
    <h1 class="text-center pt-3 neon-title">Mateus Vieira</h1>
    <h4 class="text-center mb-5">Junior Software Analyst</h4>

    <h3 class="my-5 text-center"> Professional Qualification: </h3>

    <ul class="d-flex justify-content-center">
      <li class="neon-subtitle">
        <p class="h4">FIAP School - technical high school (2021-2023)</p>
      </li>
    </ul>

    <div class="mx-1 spacer">

    </div>

    <h3 class="my-5 text-center"> Technologies that I use: </h3>

    <div class="d-flex my-5 justify-content-center flex-wrap">
      <a v-for="(area, i) of Areas" @click="selected_area = i; console.log(i)"
        :class="{ 'btn mx-1': true, 'btn-success': (selected_area == i) }"> {{ area }} </a>
    </div>

    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Front-end (Web)')" id="langs">
        <div class="d-flex justify-content-center">
          <Carousel carousel_item_target="#1" carousel_id="front" :carousel="carouselObj.front" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Back-end (Web)')" id="langs1">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="back" :carousel="carouselObj.back" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Database')" id="langs2">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="database" :carousel="carouselObj.db" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('High Performance Apps')" id="langs3">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="performace" :carousel="carouselObj.performance" />
        </div>
      </div>
    </Transition>
    <Transition name="slide-fade">
      <div v-show="selected_area == Areas.indexOf('Game Development')" id="langs4">
        <div class="d-flex justify-content-center">
          <Carousel carousel_id="game_dev" :carousel="carouselObj.game_dev" />
        </div>
      </div>
    </Transition>

    <p class="text-center text-muted">(click in the image too see more info)</p>


    <div class="mx-1 spacer">

    </div>

    <div class="d-flex flex-column align-items-center justify-content-center">
      <p class="mt-5 mx-5 justify-content-center max-width text-wrap text-break">
        I'm a student from Brazil interested in all kinds of technologies. I'm attending at the technical course in FIAP
        School and making some other <a href="https://github.com/habdig7oficial?tab=repositories">interesting projects</a>
        by myself.
      </p>

      <h3 class="text-center mt-5">Professional objective</h3>

      <p class="mt-2 mx-5 justify-content-center max-width text-wrap text-break">
        Practice and improve my knowledge of most diverse fields of technology, developing
        all kinds of apps
      </p>


      <h3 class="text-center mt-5">Idioms that I speak </h3>

      <ul>
        <li>English <span class="text-muted">(medium)</span></li>

        <li>Portuguese <span class="text-muted">(fluent) [native language]</span></li>

        <li>Spanish <span class="text-muted">(basic)</span> </li>
      </ul>


      <h3 class="text-center mt-5 mb-3"> Other Competencies </h3>

      <ul>
        <li>Agile development of software</li>

        <li>Software development oriented by UML diagrams</li>

        <li>Unix/Linux Configuration</li>

        <li>Leadership (basic) [3º year classroom representative 2023]</li>
      </ul>

      <h3 class="text-center mt-5 mb-3"> My Top Projects:</h3>

      <ul class="list-group my-3">
        <li class="list-group-item py-2"><i class="bi bi-award-fill text-warning"></i> <a target="_blank"
            href="https://github.com/MedTempo/MedTempo-Ruby-Backend.git">MedTempo Back-end <span class="text-muted">(Final
              Paper)</span></a> - Write in Ruby with Sinatra</li>

        <li class="list-group-item py-2"><i class="bi bi-award-fill"></i> <a target="_blank"
            href="https://github.com/habdig7oficial/Reddito.git">Reddito <span class="text-muted">(2ºyear
              project)</span></a> - Write in TypeScript (node) with Express</li>

        <li class="list-group-item py-2"><i style="color: #CD7F32;" class="bi bi-award-fill"></i> <a target="_blank"
            href="https://github.com/habdig7oficial/Rime.git">Rime Cryptography Algorithm demo <span
              class="text-muted">(2ºyear project)</span></a> - Write with JavaScript (Deno) </li>
      </ul>

    </div>

    <div v-for="topic of Object.keys(carouselObj)">

      <Modal v-for="(obj, index) of carouselObj[topic as keys]" :title="`${obj.title}`" :body="obj.learning_type"
        :score="obj.score" :frameworks="obj.frameworks" :topic="topic" :modal_id="obj.carousel_item_target.toString()" />
    </div>



</main>

<Footer /></template>
