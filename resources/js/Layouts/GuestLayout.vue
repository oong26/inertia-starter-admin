<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="min-h-screen">
        <main>
            <div class="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
                <div class="relative flex lg:flex-row w-full h-screen justify-center flex-col dark:bg-gray-900">
                    <div class="flex flex-col flex-1 lg:w-1/2 w-full">
                        <slot />
                    </div>
                    <div class="lg:w-1/2 w-full h-full bg-gray-950 dark:bg-white/5 lg:grid items-center hidden relative">
                        <div class="items-center justify-center flex z-1">
                            <div class="flex flex-col items-center max-w-xs">
                                <a href="#" class="block mb-4">
                                    <!-- <img src="https://vue-demo.tailadmin.com/images/logo/auth-logo.svg" /> -->
                                    <h4 class="text-7xl text-white">Logo</h4>
                                </a>
                                <p class="text-center text-gray-400 dark:text-white/60">
                                    Free and Open-Source Tailwind CSS Admin Dashboard Template
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    <!-- <div
        class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900"
    >
        <div>
            <Link href="/">
                <ApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
            </Link>
        </div>

        <div
            class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800"
        >
            <slot />
        </div>
    </div> -->
</template>
