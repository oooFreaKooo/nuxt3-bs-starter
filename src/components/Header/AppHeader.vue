<template>
    <nav class="navbar navbar-expand-lg bg-primary py-3 px-4">
        <div class="container-fluid">
            <NuxtLink
                to="/"
                class="navbar-brand"
            >
                <NuxtImg
                    src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png"
                    alt="Logo Image"
                    height="40"
                    width="80"
                    class="d-inline-block align-text-top"
                />
            </NuxtLink>

            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon" />
            </button>

            <div
                id="navbarNav"
                class="collapse navbar-collapse justify-content-end"
            >
                <ul class="navbar-nav align-items-center">
                    <li
                        v-for="item in menuItems"
                        :key="item.text"
                        class="nav-item"
                    >
                        <NuxtLink
                            class="nav-link text-white mx-2"
                            :to="item.href || '#'"
                        >
                            {{ item.text }}
                        </NuxtLink>
                    </li>
                    <li class="nav-item fs-5 ms-4">
                        <ThemeButton />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
defineProps({
    menuItems: {
        type: Array,
        required: true,
    },
})
</script>
