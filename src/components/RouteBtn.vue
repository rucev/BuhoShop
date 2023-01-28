<template>
    <RouterLink v-bind:to="props.toUrl" class="btn btn-secondary">
        <slot></slot>
    </RouterLink>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps<{
    toUrl: string
}>()

</script>
