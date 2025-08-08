<script setup>
import { onMounted, ref } from 'vue';

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);

// Define placeholder prop
const props = defineProps({
    withIcon: {
        type: Boolean,
        default: false,
    },
    placeholder: {
        type: String,
        default: '', // fallback value
    },
    type: {
        type: String,
        default: 'text',
    }
});

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <div v-if="withIcon == 'true'" class="relative">
        <div class="absolute text-gray-500 -translate-y-1/2 left-4 top-1/2 dark:text-gray-400">
            <slot />
        </div>
        <input
            class="w-full px-4 py-3 text-sm text-gray-800 bg-transparent border border-gray-300 rounded-lg dark:bg-dark-900 h-11 pl-11 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
            v-model="model"
            ref="input"
            :type="type"
            :placeholder="placeholder"
        />
    </div>
    <input
        v-else
        class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800"
        v-model="model"
        ref="input"
        :type="type"
        :placeholder="placeholder"
    />
</template>
