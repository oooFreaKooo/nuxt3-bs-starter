<template>
    <button
        class="btn btn-link nav-link creative-theme-btn text-white"
        @click="toggleTheme"
    >
        <Icon
            :name="themeIcon"
        />
    </button>
</template>

<script lang="ts" setup>
const currentTheme = ref(getPreferredTheme())

onMounted(() => {
    setTheme(currentTheme.value)
})

const themeIcon = computed(() => {
    return currentTheme.value === 'light' ? 'lightbulb-fill' : 'lightbulb'
})

const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
    setStoredTheme(currentTheme.value)
    setTheme(currentTheme.value)
}
</script>

<style scoped>
.creative-theme-btn {
  transition: transform 0.3s ease, color 0.3s;
}

.creative-theme-btn:hover {
  transform: rotate(20deg);
  color: #ffcc00;
}

.creative-theme-btn:active {
  transform: rotate(20deg);
  color: #ffcc00;
  transform: scale(0.7);
}
</style>
