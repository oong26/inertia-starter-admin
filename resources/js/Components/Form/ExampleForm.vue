<script setup lang="ts">
import { ref } from 'vue';
import InputLabel from '../InputLabel.vue';
import TextInput from '../TextInput.vue';
import SelectInput from '../SelectInput.vue';
import TextArea from '../TextArea.vue';
import PrimaryButton from '../PrimaryButton.vue';
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline';

const singleSelect = ref('')

const options = [
    { value: 'marketing', label: 'Marketing' },
    { value: 'template', label: 'Template' },
    { value: 'development', label: 'Development' },
    { value: 'other', label: 'Other' }
]

</script>

<template>
    <form>
        <div class="-mx-2.5 flex flex-wrap gap-y-5">
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>First Name</input-label>
                <text-input placeholder="Enter first name" />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>Last Name</input-label>
                <text-input placeholder="Enter last name" />
            </div>
            <div class="w-full px-2.5">
                <input-label>Email</input-label>
                <text-input placeholder="Enter email address" />
            </div>
            <div class="w-full px-2.5">
                <input-label for="select">Select Subject</input-label>
                <SelectInput
                    v-model="singleSelect"
                    :options="options"
                />
            </div>
            <div class="w-full px-2.5">
                <input-label for="select">Message</input-label>
                <TextArea placeholder="Enter your message" />
            </div>
            <div class="w-full px-2.5">
                <PrimaryButton type="submit">
                    Send Message
                    <PaperAirplaneIcon class="ms-2 w-5 h-5"/>
                </PrimaryButton>
            </div>
        </div>
    </form>
</template>