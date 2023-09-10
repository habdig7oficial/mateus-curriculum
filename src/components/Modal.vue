<template>
    <div class="modal fade" :id="modal_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

		<h2 class="text-center mt-3">Frameworks </h2>

                <div class="modal-body">
                    {{ topic == "front"? "teste123": body }}
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
    export default {
        props: {
            modal_id: String,
            title: String,
            topic: String || undefined,
            body: String
        }
    }
</script>