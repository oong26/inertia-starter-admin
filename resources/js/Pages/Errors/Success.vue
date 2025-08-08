<script setup>
import ResultLayout from "@/Layouts/ResultLayout.vue";
</script>

<template>
    <ResultLayout title="Success">
        <img src="https://vue-demo.tailadmin.com/images/error/success.svg" alt="success" class="dark:hidden" />
        <img src="https://vue-demo.tailadmin.com/images/error/success-dark.svg" alt="success" class="hidden dark:block" />
        <p class="mt-10 mb-6 text-base text-gray-700 dark:text-gray-400 sm:text-lg"> Awesome! your message has been sent successfully, Our support team will get back to you as soon as possible. </p>
    </ResultLayout>
</template>
