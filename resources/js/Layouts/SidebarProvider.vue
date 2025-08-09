<script setup lang="ts">
    import { useSidebarProvider } from '@/Composables/useSidebar';

    useSidebarProvider()
</script>

<template>
    <slot></slot>
</template>
