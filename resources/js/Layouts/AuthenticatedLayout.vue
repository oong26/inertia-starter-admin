<script setup lang="ts">
import AuthenticatedBodyLayout from './AuthenticatedBodyLayout.vue';
import SidebarProvider from './SidebarProvider.vue';
import ThemeProvider from './ThemeProvider.vue';
</script>

<template>
    <ThemeProvider>
        <SidebarProvider>
            <div>
                <AuthenticatedBodyLayout>
                    <slot />
                </AuthenticatedBodyLayout>
            </div>
        </SidebarProvider>
    </ThemeProvider>
</template>
