<script setup>
import { ref, provide } from 'vue';
import Sidebar from './Sidebar.vue';
import AppHeader from './AppHeader.vue';

const isSidebarCollapsed = ref(false);
provide('isSidebarCollapsed', isSidebarCollapsed);
</script>

<template>
    <div>
        <div class="min-h-screen xl:flex bg-gray-100 dark:bg-gray-900">
            <sidebar/>
            <!-- Page Content -->
            <div class="flex-1 transition-all duration-300 ease-in-out"
                :class="{ 'xl:ml-[290px]': !isSidebarCollapsed, 'xl:ml-[90px]': isSidebarCollapsed }">
                <app-header />
                <div class="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
