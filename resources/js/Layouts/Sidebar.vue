<script setup>
import NavItem from './Components/NavItem.vue';
import {RectangleGroupIcon, CalendarIcon, NewspaperIcon, PhotoIcon, UserCircleIcon} from "@heroicons/vue/24/outline";
import { inject } from 'vue';

const navItems = [
    { href: route('dashboard'), routeName: 'dashboard', label: "Dashboard", children: [], icon: RectangleGroupIcon },
    { href: route('calendar'), routeName: 'calendar', label: "Calendar", children: [], icon: CalendarIcon },
    { href: route('user-profile'), routeName: 'user-profile', label: "User Profile", children: [], icon: UserCircleIcon },
    {
        href: "#", routeName: null, label: "Posts", children: [
            { href: "#", routeName: null, label: "All posts", children: [], icon: null },
            { href: "#", routeName: null, label: "Add new", children: [], icon: null },
            { href: "#", routeName: null, label: "Categories", children: [], icon: null },
        ], icon: NewspaperIcon
    },
    {
        href: "#", routeName: null, label: "Media", children: [
            { href: "#", routeName: null, label: "Library", children: [], icon: null },
            {
                href: "#", routeName: null, label: "Add new", children: [
                    { href: "#", routeName: null, label: "Third level", children: [], icon: null },
                ], icon: null
            },
        ], icon: PhotoIcon
    },
];

const isSidebarCollapsed = inject('isSidebarCollapsed');
</script>

<template>
    <aside
        class="fixed flex flex-col mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200 -translate-x-full xl:translate-x-0"
        :class="{ 'xl:w-[290px]': !isSidebarCollapsed, 'xl:w-[90px]': isSidebarCollapsed }">
        <div class="pt-8 pb-7 flex justify-start">
            <a aria-current="page" href="/" class="router-link-active router-link-exact-active">
                <img class="dark:hidden" src="https://vue-demo.tailadmin.com/images/logo/logo.svg" alt="Logo"
                    width="150" height="40"
                    :class="[
                        isSidebarCollapsed ? 'hidden' : ''
                    ]">
                <img class="hidden dark:block" src="https://vue-demo.tailadmin.com/images/logo/logo-dark.svg" alt="Logo"
                    width="150" height="40"
                    :class="[
                        isSidebarCollapsed ? 'hidden' : ''
                    ]">
                <img
                    :class="[
                        isSidebarCollapsed ? '' : 'hidden'
                    ]"
                    src="https://vue-demo.tailadmin.com/images/logo/logo-icon.svg" alt="logo" />
            </a>
        </div>
        <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
            <nav class="mb-6">
                <div class="flex flex-col gap-4">
                    <div>
                        <h2 class="mb-4 text-xs uppercase flex leading-[20px] text-gray-400 justify-start">Menu</h2>
                        <NavItem
                            :item="item"
                            :is-collapsed="isSidebarCollapsed"
                            v-for="item in navItems"
                            :key="item.label"
                            :active="route().current(item.routeName)" />
                    </div>
                </div>
            </nav>
        </div>
    </aside>
</template>