<template>
    <NuxtLayout>
        <NuxtErrorBoundary>
            <NuxtPage />

            <template #error="{ error }">
                <NuxtLayout>
                    <ErrorPage :error="error" />
                </NuxtLayout>
            </template>
        </NuxtErrorBoundary>
    </NuxtLayout>
</template>

<script setup lang="ts">
import ErrorPage from '@/error.vue'
</script>

<style scoped lang="scss">

</style>
