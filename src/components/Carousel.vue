<template>
    <div data-bs-theme="white" :id="'carouselExampleCaptions' + carousel_id" class="carousel slide w-100" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(slide, i) of carousel" type="button" :data-bs-target="'#carouselExampleCaptions' + carousel_id"
                :data-bs-slide-to="i" :class="'text-bg-light ' + (i == 0 ? 'active' : '')" aria-current="true" aria-label="Slide 1"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(slide, i) of carousel" :class="'align-items-end carousel-item ' + (i == 0 ? 'active' : '')" data-bs-toggle="modal" :data-bs-target="'#' + slide.carousel_item_target">
                <div class="d-flex justify-content-center mb-5">
                    <img :src="slide.image" class="img-size position-absolute" :alt="'Logo of ' + slide.title">
                </div>
                <div style="top: -4.75rem;" class="carousel-caption text-light d-none d-md-block ">
                    <h3 class="text-center text-light">{{ slide.title }}</h3>
                    <p class="text-light">knowledge level: <i v-for="(j,i) of slide.score" class="bi bi-star-fill mx-1 text-warning"></i></p>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev " type="button" :data-bs-target="'#carouselExampleCaptions' + carousel_id" data-bs-slide="prev">
            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" type="button" :data-bs-target="'#carouselExampleCaptions' + carousel_id" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
    </div>
</template>

<script lang="ts">
import type { framework } from '@/interfaces/tech-interface';


export interface carousel {
    title: string,
    subtitle: string,
    image: string,
    carousel_item_target: String,

    frameworks?: Array<framework>,
    score: number,
    learning_type?: string
}

export default {
    props: {
        carousel_id: String,
        carousel: {
            type: Array<carousel>,

        }
    },
    mounted() {
        //console.log(this.carousel)
    },
}
</script>