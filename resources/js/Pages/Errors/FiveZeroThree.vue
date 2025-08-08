<script setup>
import ResultLayout from "@/Layouts/ResultLayout.vue";
</script>

<template>
    <ResultLayout title="Error">
        <img src="https://vue-demo.tailadmin.com/images/error/503.svg" alt="503" class="dark:hidden" />
        <img src="https://vue-demo.tailadmin.com/images/error/503-dark.svg" alt="503" class="hidden dark:block" />
        <p class="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg"> We can't seem to find the page you are looking for! </p>
    </ResultLayout>
</template>
