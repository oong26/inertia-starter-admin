<script setup>
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
</script>

<template>
    <form>
        <div class="-mx-2.5 flex flex-wrap gap-y-5">
            <div class="w-full px-2.5 xl:w-1/2">
                <text-input placeholder="Name" />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <text-input type="email" placeholder="Email address" />
            </div>
            <div class="w-full px-2.5">
                <text-input type="password" placeholder="Password" />
            </div>
            <div class="w-full px-2.5">
                <text-input type="password" placeholder="Confirm Password" />
            </div>
            <div class="w-full px-2.5">
                <PrimaryButton type="submit">
                    Submit
                </PrimaryButton>
            </div>
        </div>
    </form>
</template>