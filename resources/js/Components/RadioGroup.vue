<script setup>
    defineProps({
        name: String,
        modelValue: [String, Number],
        options: {
            type: Array,
            required: true,
        },
    });
    defineEmits(['update:modelValue']);
</script>

<template>
    <div v-for="(option, index) in options" :key="index" class="flex flex-wrap items-center gap-4">
        <label class="relative flex items-center gap-3 text-sm font-medium cursor-pointer select-none" :class="{
            'text-gray-700 dark:text-gray-400': modelValue === option.value,
            'text-gray-500 dark:text-gray-400': modelValue !== option.value,
        }">
            <input type="radio" :name="name" :value="option.value" :checked="modelValue === option.value" @change="$emit('update:modelValue', option.value)" />
            {{ option.label }}
        </label>
    </div>
</template>