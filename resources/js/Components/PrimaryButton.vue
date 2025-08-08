<script setup>
const props = defineProps({
    type: {
        type: String,
        default: 'button'
    }
})
</script>
<template>
    <button
        :type="type"
        class="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-blue-600 shadow-theme-xs hover:bg-blue-700"
    >
        <slot />
    </button>
</template>
