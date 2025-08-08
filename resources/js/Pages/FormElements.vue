<script setup>
import PageBreadcrumb from '@/Components/PageBreadcrumb.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import ComponentCard from '@/Components/ComponentCard.vue';
import DefaultInputs from '@/Components/Form/DefaultInputs.vue';
import SelectInput from '@/Components/Form/SelectInput.vue';
import TextArea from '@/Components/Form/TextArea.vue';
import InputState from '@/Components/Form/InputState.vue';
import InputGroup from '@/Components/Form/InputGroup.vue';
import FileInput from '@/Components/Form/FileInput.vue';
import CheckboxInput from '@/Components/Form/CheckboxInput.vue';
import Dropzone from '@/Components/Form/Dropzone.vue';

</script>

<template>
    <AuthenticatedLayout>
        <PageBreadcrumb pageTitle="Form Elements" />
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div class="space-y-6">
            <ComponentCard title="Default Inputs">
                <DefaultInputs />
            </ComponentCard>
            <ComponentCard title="Select Inputs">
                <SelectInput />
            </ComponentCard>
            <ComponentCard title="Inputs States">
                <TextArea />
            </ComponentCard>
            <ComponentCard title="Inputs States">
                <InputState />
            </ComponentCard>
        </div>
        <div class="space-y-6">
            <ComponentCard title="Inputs Group">
                <InputGroup />
            </ComponentCard>
            <ComponentCard title="File Input">
                <FileInput />
            </ComponentCard>
            <ComponentCard title="Checkboxes">
                <CheckboxInput />
            </ComponentCard>
            <ComponentCard title="Dropzone">
                <Dropzone />
            </ComponentCard>
        </div>
    </div>
    </AuthenticatedLayout>
</template>