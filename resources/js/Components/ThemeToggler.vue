<script setup>
import { useTheme } from '@/Layouts/ThemeProvider.vue';
import { MoonIcon as MoonIconOutlined} from '@heroicons/vue/24/outline';
import { MoonIcon } from '@heroicons/vue/24/solid';

// const { toggleTheme } = useTheme()
function toggleTheme() {
    console.log('toggler')
    useTheme()
}
</script>

<template>
    <button
        @click.prevent="toggleTheme"
        class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
        aria-label="Toggle Theme Button">
        <MoonIconOutlined class="w-6 h-6 dark:block" />
        <MoonIcon class="w-6 h-6 hidden dark:block" />
    </button>
</template>