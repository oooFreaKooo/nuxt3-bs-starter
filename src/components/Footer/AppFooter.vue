<template>
    <footer class="bg-dark text-white py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-12 col-md-4">
                    <img
                        src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png"
                        alt="Logo Image"
                        class="mb-3"
                        width="120"
                        height="60"
                    >
                    <p class="small">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                <div class="col-12 col-md-4">
                    <h4 class="h5 mb-3">
                        Kontakt
                    </h4>
                    <address class="small mb-0">
                        Example Company<br>
                        Example Street 123<br>
                        12345 Example City<br>
                        Tel: +12 123 456789
                    </address>
                </div>

                <div class="col-12 col-md-4">
                    <h4 class="h5 mb-3">
                        Legal
                    </h4>
                    <ul class="list-unstyled small">
                        <li
                            v-for="(item, index) in legalItems"
                            :key="index"
                            class="mb-2"
                        >
                            <NuxtLink
                                to="/"
                                class="text-white text-decoration-none"
                            >
                                {{ item }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps({
    legalItems: {
        type: Array,
        required: true,
    },
})
</script>
