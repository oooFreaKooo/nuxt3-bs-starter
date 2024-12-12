<template>
    <div class="error-container min-vh-100 d-flex align-items-center bg-secondary">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <div class="error-content">
                        <h1
                            v-if="error.statusCode"
                            class="error-code"
                        >
                            {{ error.statusCode }}
                        </h1>
                        <h1
                            v-else
                            class="error-code"
                        >
                            Hmmm... Something went wrong.
                        </h1>

                        <div class="error-divider">
                            <div class="line bg-dark" />
                            <Icon
                                name="exclamation-circle"
                                color="danger"
                            />
                            <div class="line bg-dark" />
                        </div>

                        <h2 class="error-message mb-4">
                            {{ error.statusCode ? error.statusMessage : 'An unexpected error occurred' }}
                        </h2>

                        <button
                            class="btn btn-primary btn-lg px-5 rounded-pill shadow-sm"
                            @click="handleError"
                        >
                            <i class="bi bi-house-door me-2" />
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

// Define the props to receive the error object
defineProps({
    error: {
        type: Object as () => NuxtError,
        required: true,
    },
})

// Function to handle clearing the error and redirecting
const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-content {
    padding: 3rem 0;
}

.error-code {
    font-size: 8rem;
    font-weight: 700;
    color: #0d6efd;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.error-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
}

.error-divider .line {
    height: 2px;
    width: 100px;
}

.error-divider i {
    font-size: 2rem;
    color: #6c757d;
    margin: 0 1rem;
}

.error-message {
    font-size: 1.5rem;
    color: #6c757d;
    font-weight: 300;
}

.btn-primary {
    transition: all 0.3s ease;
}

.btn-primary:hover {
    transform: translateY(-2px);
}
</style>
