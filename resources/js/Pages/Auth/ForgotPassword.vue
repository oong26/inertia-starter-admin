<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, useForm } from '@inertiajs/vue3';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'));
};
</script>

<template>
    <GuestLayout>
        <Head title="Lupa Password" />
        <div class="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
            <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
                Lupa kata sandi? Tidak masalah. Cukup beri tahu kami alamat email Anda, dan kami akan mengirimkan tautan pengaturan ulang kata sandi melalui email agar Anda dapat memilih kata sandi baru.
            </div>
    
            <div
                v-if="status"
                class="mb-4 text-sm font-medium text-green-600 dark:text-green-400"
            >
                {{ status }}
            </div>
    
            <form @submit.prevent="submit">
                <div>
                    <InputLabel for="email" value="Email" />
    
                    <TextInput
                        id="email"
                        type="email"
                        class="mt-1 block w-full"
                        v-model="form.email"
                        required
                        autofocus
                        autocomplete="username"
                        placeholder="Masukkan email"
                    />
    
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>
    
                <div class="mt-4 flex items-center justify-end">
                    <PrimaryButton
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                    >
                        Kirim Email
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </GuestLayout>
</template>
