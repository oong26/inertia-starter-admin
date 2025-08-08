<script setup>
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/vue";
import {ChevronDownIcon} from "@heroicons/vue/24/solid";
import {computed} from "vue";
import { Link } from "@inertiajs/vue3";

const props = defineProps({
    item: Object,
    isCollapsed: Boolean,
    active: Boolean,
});

const classes = computed(() =>
    props.active
        ? 'font-semibold text-brand-500 bg-brand-50'
        : 'font-medium text-gray-600',
);

const hasActiveChild = computed(() => {
    function checkRouteMatch(items) {
        return items.some(item =>
            item.routeName && route().current(item.routeName) ||
            item.children && checkRouteMatch(item.children)
        );
    }

    return checkRouteMatch(props.item.children);
});

</script>
<template>
    <Link v-if="!item.children.length" :href="item.href"
        :class="[
            'group flex w-full items-center rounded-md py-2 px-3 text-sm',
            active ? '' : 'hover:bg-gray-100',
            classes
        ]">
        <component
        :class="[
            'mr-2 h-6 w-6 shrink-0',
            active ? 'text-brand-500' : 'text-gray-600',
        ]"
        :is="item.icon"
        v-if="item.icon"
        ></component>
        <span v-if="!isCollapsed">{{ item.label }}</span>
    </Link>

    <Disclosure
        v-else
        v-slot="{open}"
        :default-open="hasActiveChild"
    >
        <DisclosureButton
            :class="[
                'group flex w-full items-center rounded-md py-2 px-3 text-left text-sm',
                hasActiveChild
                    ? 'font-semibold text-brand-500 bg-brand-50'
                    : 'hover:bg-gray-100 font-medium text-gray-600'
            ]"
        >
        <component
            :class="[
                'mr-2 h-6 w-6 shrink-0',
                hasActiveChild ? 'text-brand-500' : 'text-gray-600'
            ]"
            :is="item.icon"
            v-if="item.icon"
        />
        <span class="flex-1" v-if="!isCollapsed">{{ item.label }}</span>
        <ChevronDownIcon
            :class="[
            'h-6 w-6 shrink-0',
            open ? '-rotate-180 text-gray-600' : 'text-gray-400',
            isCollapsed ? 'hidden' : ''
            ]"
        />
        </DisclosureButton>

        <DisclosurePanel class="ml-4">
        <NavItem
            v-for="child in item.children"
            v-if="!isCollapsed"
            :item="child"
            :key="child.label"
            :active="route().current(child.routeName)"
        />
        </DisclosurePanel>
    </Disclosure>
</template>