<script lang="ts">
import Dropdown from "@/components/Dropdown.vue"

export default {
    name: "NavBar",
    components: {
        Dropdown
    }    
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg text-bg-dark border-bottom border-light ">
            <div class="container-fluid">
                <router-link class="navbar-brand neon-title" to="/">Mateus Vieira</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#footer">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#langs">My Knowloge</a>
                        </li>
                        <li class="nav-item">
                          <Dropdown title="Download Curriculum" :opt="[{title: 'PDF', to: '/mateus-curriculum/Documents/mateus_curriculum.pdf'}, {title: 'ODT', to: '/mateus-curriculum/Documents/mateus_curriculum.odt'}, {title: 'Src', to: 'https://github.com/habdig7oficial/mateus-curriculum.git' }]" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

