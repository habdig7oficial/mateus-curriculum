<template>
    <div class="modal fade" :id="modal_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }} <i v-for="(j,i) of score" class="bi bi-star-fill mx-1 text-warning"></i></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <h2 class="text-center mt-3">Frameworks </h2>

                <div class="modal-body">
                    {{ topic == "front" ? "teste123" : body }}

                    <ul style="list-style: none;">
                        <li v-for="(framework, i) of frameworks">
                            <!--<Card />-->
                        </li>
                    </ul>
                </div>



                <!--
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
//import Card from "@/components/Card.vue"
import type { impl, framework } from '@/interfaces/tech-interface';

export default {
    name: "Modal",
    props: {
        modal_id: String,
        title: String,
        topic: String || undefined,
        body: String,
        frameworks: Array<framework>,
        score: Number
    },
    components: {
        //Card
    }
}
</script>