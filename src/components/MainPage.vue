<template>
    <main>
        <!-- Hero Section -->
        <section class="hero-section py-5 d-flex align-items-center">
            <div class="container py-5">
                <div class="row min-vh-50">
                    <div class="col-12 col-md-8 text-white">
                        <h1 class="display-4 fw-bold mb-4">
                            Lorem ipsum dolor sit amet.
                        </h1>
                        <p class="lead text-white opacity-75">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ut, eligendi quasi accusantium voluptatum minus totam illum fugiat quod veniam blanditiis, nobis libero dignissimos quas recusandae quia aperiam excepturi officiis. Dolor.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Benefits Section -->
        <section class="py-5">
            <div class="container">
                <div class="row g-4">
                    <div
                        v-for="(benefit, index) in benefits"
                        :key="index"
                        class="col-12 col-md-4"
                    >
                        <div class="card h-100 border-0 p-4">
                            <BootstrapIcon
                                :name="benefit.icon"
                                class="fs-1 mb-3"
                            />
                            <h3 class="h4 mb-3">
                                {{ benefit.title }}
                            </h3>
                            <p class="mb-0">
                                {{ benefit.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Content Section -->
        <section class="py-5">
            <div class="container">
                <div class="row g-4 align-items-center">
                    <div class="col-12 col-md-6">
                        <h2 class="display-5 mb-4">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        <div class="row g-4">
                            <div
                                v-for="(service, index) in services"
                                :key="index"
                                class="col-12 col-md-6"
                            >
                                <h4 class="h5 mb-3">
                                    {{ service.title }}
                                </h4>
                                <ul class="list-unstyled">
                                    <li
                                        v-for="(item, i) in service.items"
                                        :key="i"
                                        class="mb-2"
                                    >
                                        <BootstrapIcon
                                            name="check2"
                                            class="me-2"
                                        />
                                        {{ item }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 col-md-6">
                        <NuxtImg
                            src="https://picsum.photos/600/400?random=1"
                            class="img-fluid rounded"
                            alt="Team working together"
                            width="600"
                            height="400"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
defineProps({
    benefits: {
        type: Array as PropType<Benefit[]>,
        required: true,
    },
    services: {
        type: Array as PropType<Service[]>,
        required: true,
    },
})
</script>

<style scoped>
.hero-section {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('https://picsum.photos/1200/800?random=0');
  background-size: cover;
  background-position: center;
  min-height: 600px;
}
</style>
