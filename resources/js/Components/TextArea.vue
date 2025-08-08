<script setup lang="ts">
    defineProps < {
        modelValue: string
        placeholder ? : string
        rows ? : number
        disabled ? : boolean
        error ? : boolean
        errorMessage ? : string
    } > ()
    const emit = defineEmits(['update:modelValue'])
</script>
<template>
    <div>
        <textarea :value="modelValue" :placeholder="placeholder" :rows="rows || 6" :disabled="disabled" @input="(e) => emit('update:modelValue', e.target.value)" class="w-full rounded-lg border bg-transparent px-4 py-2.5 text-sm shadow-theme-xs focus:outline-hidden focus:ring-3
        dark:bg-dark-900 dark:text-white/90 dark:placeholder:text-white/30
        placeholder:text-gray-400 text-gray-800
        dark:bg-gray-900
        focus:ring-brand-500/10
        dark:focus:border-brand-800
        dark:border-gray-700
        border-gray-300
        focus:border-brand-300
        dark:focus:ring-brand-500/10
        disabled:border-gray-100 disabled:bg-gray-50 disabled:placeholder:text-gray-300
        dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:placeholder:text-white/15" :class="{
        'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800':
          error
      }" />
        <p v-if="error && errorMessage" class="mt-1.5 text-theme-xs text-error-500">
            {{ errorMessage }}
        </p>
    </div>
</template>