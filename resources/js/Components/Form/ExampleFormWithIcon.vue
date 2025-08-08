<script setup>
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from '../PrimaryButton.vue';
import { UserIcon, EnvelopeIcon, LockClosedIcon, ArrowRightIcon } from '@heroicons/vue/24/outline';
import {useForm} from '@inertiajs/vue3'
import CheckboxInput from './CheckboxInput.vue';
import Checkbox from '../Checkbox.vue';

const form = useForm({
    remember: false,
});
</script>

<template>
    <form>
        <div class="-mx-2.5 flex flex-wrap gap-y-5">
            <div class="w-full px-2.5">
                <text-input placeholder="Name" with-icon="true">
                    <UserIcon class="w-4" />
                </text-input>
            </div>
            <div class="w-full px-2.5">
                <text-input type="email" placeholder="Email address" with-icon="true">
                    <EnvelopeIcon class="w-4" />
                </text-input>
            </div>
            <div class="w-full px-2.5">
                <text-input type="password" placeholder="Password" with-icon="true">
                    <LockClosedIcon class="w-4" />
                </text-input>
            </div>
            <div class="w-full px-2.5">
                <text-input type="password" placeholder="Confirm Password" with-icon="true">
                    <LockClosedIcon class="w-4" />
                </text-input>
            </div>
            <div class="w-full px-2.5">
                <div class="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
                    <div>
                        <label class="flex items-center text-sm font-medium text-gray-700 cursor-pointer select-none dark:text-gray-400">
                            <div class="relative">
                                <Checkbox name="remember" v-model:checked="form.remember" />
                            </div>
                            <span class="ms-2">Remember me</span>
                        </label>
                    </div>
                    <div>
                        <PrimaryButton type="submit">
                            Create Account <ArrowRightIcon class="ms-2 w-4" />
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>