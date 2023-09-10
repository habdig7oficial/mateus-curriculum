<template>
    <div class="dropdown">
        <a class="btn btn-muted dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {{ title }}
        </a>

        <ul class="dropdown-menu">
            <li v-for="(sub, i) of opt"><a class="dropdown-item" target="_blank" :href="sub.to">{{ sub.title }}</a></li>
        </ul>
    </div>
</template>

<script lang="ts">

export interface subbtn {
    title: String;
    to: string;
}

export default {
    name: "BtnDropdown",
    props:{
        title: String,
        opt: Array<subbtn>
    }
}
</script>