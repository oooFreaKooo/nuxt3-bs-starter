<template>
    <div class="services-page">
        <Main
            :benefits="pageData?.benefits ?? []"
            :services="pageData?.services ?? []"
        />
    </div>
</template>

<script setup lang="ts">
import { usePage } from '~/composables/usePage'

const { pageData, getPageData } = usePage()

// Fetch data when component mounts
await getPageData()
</script>

<style scoped>
.services-page {
  overflow-x: hidden;
}
</style>
