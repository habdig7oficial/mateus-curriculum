<template>
    <div class="modal fade" :id="modal_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }} <i v-for="(j, i) of score"
                            class="bi bi-star-fill mx-1 text-warning"></i></h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h2 v-if="frameworks?.length != undefined && frameworks.length > 0" class="text-center mb-5"> Frameworks </h2>

                    <ul v-if="typeof frameworks != 'undefined' && frameworks?.length > 0" class="d-flex justify-content-center" style="list-style: none;">
                        <li v-for="(framework, i) of frameworks">
                            <div class="card mx-3" style="width: 18rem;">
                                <img style="max-height: 20rem;" class="card-img-top p-3 mx-auto" :src="framework.logo" :alt="'Image of ' + framework.name + ' logo'">
                                <div class="card-body">
                                    <h5 class="card-title text-center">{{ framework.name }}</h5>
                                    <p class="text-muted text-center">(examples)</p>
                                    <ul v-if="typeof framework.examples?.length == 'number' && framework.examples?.length > 0" class="d-flex justify-content-center align-items-center flex-column">
                                        <li v-for="ex of framework.examples" class="card-text"><a :href="ex.link">{{ ex.name }}</a></li>
                                    </ul>
                                    <p v-else class="text-center">(no public examples found)</p>
                                    <!--<a href="#" class="btn btn-primary text-center">Go somewhere</a>-->
                                </div>
                            </div>
                        </li>
                    </ul>
                    <p v-else class="text-center text-muted">(I don’t know YET any framework on this language)</p>

                    <div class="mx-1 spacer my-4"></div>

                    <p class="text-center text-muted">Type of learning: {{ body }}</p>
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
//import Teste from "./Card.vue"
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
        // CardV
    },
    mounted: function () {
        console.log(this.frameworks)
    }
}
</script>