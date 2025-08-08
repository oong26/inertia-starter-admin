<script setup>
import { Head } from '@inertiajs/vue3';
import PageBreadcrumb from '@/Components/PageBreadcrumb.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ComponentCard from '@/Components/ComponentCard.vue';
import BasicForm from '@/Components/Form/BasicForm.vue';
import ExampleForm from '@/Components/Form/ExampleForm.vue';
import ExampleFormWithIcon from '@/Components/Form/ExampleFormWithIcon.vue';
import PersonalInfoForm from '@/Components/Form/PersonalInfoForm.vue';

</script>

<template>
    <Head title="Form Layout" />
    <AuthenticatedLayout>
        <PageBreadcrumb pageTitle="Form Layout" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div class="space-y-5 sm:space-y-6">
                <component-card title="Basic Form">
                    <BasicForm />
                </component-card>
                <component-card title="Example Form">
                    <ExampleForm />
                </component-card>
            </div>
            <div class="space-y-5 sm:space-y-6">
                <component-card title="Example Form With Icons">
                    <ExampleFormWithIcon />
                </component-card>
                <component-card title="Example Form">
                    <PersonalInfoForm />
                </component-card>
            </div>
        </div>
    </AuthenticatedLayout>
</template>