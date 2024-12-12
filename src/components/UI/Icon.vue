<template>
    <div
        :class="[
            'p-1',
            props.btn ? ['btn', `btn-${props.bg}`] : [],
            `bg-${props.bg}`,
            {
                'rounded-circle': props.circle,
            },
        ]"
    >
        <component
            :is="wrapperElement"
            :to="href"
            :class="[
                'd-flex align-items-center justify-content-center',
                size === 'sm' || size === 'xs' ? 'p-1' : 'p-2',
                sizeClasses,
                colorClasses,
                {
                    'cursor-pointer': clickable && !disabled,
                    'opacity-50': disabled,
                    'me-2': start,
                    'ms-2': end,
                },
            ]"
            :disabled="disabled"
            @click="handleClick"
        >
            <BootstrapIcon
                v-if="name in bootstrapIcons"
                :name="name as BootstrapIcons"
                :class="[
                    'icon d-flex align-items-center justify-content-center',
                    sizeClasses,
                    animationClass,
                ]"
            />
            <component
                :is="dynamicSvgComponent"
                v-else
                :style="{ fill: `var(--bs-${props.color})` }"
                :class="[
                    sizeClasses,
                    animationClass,
                ]"
            />
        </component>
    </div>
</template>

<script lang="ts" setup>
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.json'

const emit = defineEmits(['click'])

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        default: '',
    },
    size: {
        type: String as PropType<Size>,
        default: 'md',
    },
    color: {
        type: String as PropType<Color>,
        default: 'white',
    },
    bg: {
        type: String as PropType<Color>,
        default: 'transparent',
    },
    btn: {
        type: Boolean,
        default: false,
    },
    circle: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    clickable: {
        type: Boolean,
        default: false,
    },
    href: {
        type: String,
        default: '',
    },
    start: {
        type: Boolean,
        default: false,
    },
    end: {
        type: Boolean,
        default: false,
    },
    animate: {
        type: String as PropType<IconAnimationType>,
        default: '',
    },
    backgroundOpacity: {
        type: Number,
        default: 1,
        validator: (value: number) => value >= 0 && value <= 1,
    },
})

// Dynamically load SVG component
const dynamicSvgComponent = computed(() => {
    if (props.name in bootstrapIcons) { return null }

    return defineAsyncComponent(() =>
        import(`~/assets/icons/${props.name}.svg?component`)
            .catch((err) => {
                console.error(`Failed to load SVG icon: ${props.name}`, err)
                return null
            }),
    )
})

const wrapperElement = computed(() => props.href ? 'NuxtLink' : props.clickable ? 'button' : 'div')

const sizeClasses = computed(() => ({
    'icon-xs': props.size === 'xs',
    'icon-sm': props.size === 'sm',
    'icon-md': props.size === 'md',
    'icon-lg': props.size === 'lg',
    'icon-xl': props.size === 'xl',
    'icon-xxl': props.size === 'xxl',
}))

const colorClasses = computed(() => ({
    [`text-${props.color}`]: props.color,
}))

const animationClass = computed(() => ({
    'icon-pulse': props.animate === 'pulse',
    'icon-spin': props.animate === 'spin',
    'icon-bounce': props.animate === 'bounce',
}))

const handleClick = (event: Event) => {
    if (!props.disabled && props.clickable) {
        emit('click', event)
    }
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

.icon {
    line-height: 0;
}

/* Size classes */
.icon-xs {
    width: 16px;
    height: 16px;
    font-size: 8px;
}
.icon-sm {
    width: 24px;
    height: 24px;
    font-size: 16px;
}
.icon-md {
    width: 32px;
    height: 32px;
    font-size: 16px;
}
.icon-lg {
    width: 48px;
    height: 48px;
    font-size: 32px;
}
.icon-xl {
    width: 64px;
    height: 64px;
    font-size: 48px;
}
.icon-xxl {
    width: 96px;
    height: 96px;
    font-size: 64px;
}

/* Animations */
.icon-pulse {
  animation: pulse 2s infinite;
}

.icon-spin {
  animation: spin 2s linear infinite;
}

.icon-bounce {
  animation: bounce 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
</style>
