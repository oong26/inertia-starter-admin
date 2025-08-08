<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import PageBreadcrumb from '@/Components/PageBreadcrumb.vue';
import { Head } from '@inertiajs/vue3';
import ComponentCard from '@/Components/ComponentCard.vue';
import BasicTableOne from '@/Components/Tables/BasicTableOne.vue';
import BasicTableTwo from '@/Components/Tables/BasicTableTwo.vue';
</script>

<template>
    <Head title="Basic Tables" />
    
    <AuthenticatedLayout>
        <PageBreadcrumb pageTitle="Basic Tables" />
        <div class="space-y-5 sm:space-y-6">
            <component-card title="Basic Table 1">
                <BasicTableOne />
            </component-card>
            <component-card title="Basic Table 2">
                <BasicTableTwo />
            </component-card>
        </div>
    </AuthenticatedLayout>
</template>
