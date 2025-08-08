<script setup>
import { ref } from 'vue';
import InputLabel from '../InputLabel.vue';
import TextInput from '../TextInput.vue';
import SelectInput from '../SelectInput.vue';
import RadioGroup from '../RadioGroup.vue';
import PrimaryButton from '../PrimaryButton.vue';
import SecondaryButton from '../SecondaryButton.vue';

const singleSelect = ref('')
const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' }
]

const categorySelect = ref('')
const categoryOptions = [
    { value: 'category 1', label: 'Category 1' },
    { value: 'category 2', label: 'Category 2' },
    { value: 'category 3', label: 'Category 3' }
]

const countrySelect = ref('')
const countryOptions = [
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'indonesia', label: 'Indonesia' }
]

const membership = ref('free') // default value

</script>

<template>
    <form>
        <div class="-mx-2.5 flex flex-wrap gap-y-5">
            <div class="w-full px-2.5">
                <h4 class="pb-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">Personal Info</h4>
            </div>
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
                <text-input placeholder="Enter email address" type="email" />
            </div>
            <div class="w-full px-2.5">
                <input-label for="select">Gender</input-label>
                <SelectInput
                    v-model="singleSelect"
                    :options="options"
                />
            </div>
            <div class="w-full px-2.5">
                <input-label for="select">Date Picker Input</input-label>
                <text-input placeholder="Select date" type="date" />
            </div>
            <div class="w-full px-2.5">
                <input-label for="select">Category</input-label>
                <SelectInput
                    v-model="categorySelect"
                    :options="categoryOptions"
                />
            </div>
            <div class="w-full px-2.5">
                <h4 class="pb-4 text-base font-medium text-gray-800 border-b border-gray-200 dark:border-gray-800 dark:text-white/90">Address</h4>
            </div>
            <div class="w-full px-2.5">
                <input-label>Street</input-label>
                <text-input />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>City</input-label>
                <text-input />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>State</input-label>
                <text-input />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>Post Code</input-label>
                <text-input />
            </div>
            <div class="w-full px-2.5 xl:w-1/2">
                <input-label>Country</input-label>
                <SelectInput
                    v-model="countrySelect"
                    :options="countryOptions"
                />
            </div>
            <div class="w-full px-2.5">
                <div class="flex items-center gap-3">
                    <input-label>Membership : </input-label>
                    <RadioGroup
                        name="membership"
                        v-model="membership"
                        :options="[
                            { label: 'Free', value: 'free' },
                            { label: 'Paid', value: 'paid' }
                        ]"
                    />
                </div>
            </div>
            <div class="w-full px-2.5">
                <div class="flex items-center gap-3 mt-1">
                    <div>
                        <PrimaryButton type="submit">
                            Save Changes
                        </PrimaryButton>
                    </div>
                    <div>
                        <SecondaryButton>Cancel</SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>