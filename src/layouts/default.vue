<template>
    <div
        ref="container"
        class="bg-body"
    >
        <div class="content-wrapper">
            <AppHeader :menu-items="pageData?.menuItems" />
            <slot />
            <AppFooter :legal-items="pageData?.legalItems" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePage } from '~/composables/usePage'

const { pageData, getPageData } = usePage()

await getPageData()
</script>

<style scoped lang="scss">
.content-wrapper {
    position: relative;
    z-index: 3;
}
</style>
