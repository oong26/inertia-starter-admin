<script setup>
import NavItem from './Components/NavItem.vue';
import {RectangleGroupIcon, CalendarIcon, DocumentTextIcon, DocumentIcon, UserCircleIcon, TableCellsIcon} from "@heroicons/vue/24/outline";
import { inject } from 'vue';
import { useSidebar } from '@/Composables/useSidebar';

const navItems = [
    { href: route('dashboard'), routeName: 'dashboard', label: "Dashboard", children: [], icon: RectangleGroupIcon },
    { href: route('calendar'), routeName: 'calendar', label: "Calendar", children: [], icon: CalendarIcon },
    { href: route('user-profile'), routeName: 'user-profile', label: "User Profile", children: [], icon: UserCircleIcon },
    {
        href: "#", routeName: 'form.', label: "Forms", children: [
            { href: route('form.elements'), routeName: 'form.elements', label: "Form Elements", children: [], icon: null },
            { href: route('form.layout'), routeName: 'form.layout', label: "Form Layout", children: [], icon: null },
        ], icon: DocumentTextIcon
    },
    {
        href: "#", routeName: 'tables.', label: "Tables", children: [
            { href: route('tables.basic'), routeName: 'tables.basic', label: "Basic Tables", children: [], icon: null },
            { href: route('tables.datatable'), routeName: 'tables.datatable', label: "Data Tables", children: [], icon: null },
        ], icon: TableCellsIcon
    },
    {
        href: "#", routeName: 'page.', label: "Pages", children: [
            { href: route('page.blank'), routeName: 'page.blank', label: "Blank Page", children: [], icon: null },
            { href: route('page.not-found'), routeName: 'page.not-found', label: "404 Page", children: [], icon: null },
            { href: route('page.error'), routeName: 'page.error', label: "500 Page", children: [], icon: null },
            { href: route('page.service-unavailable'), routeName: 'page.service-unavailable', label: "503 Page", children: [], icon: null },
            { href: route('page.coming-soon'), routeName: 'page.coming-soon', label: "Coming Soon Page", children: [], icon: null },
            { href: route('page.maintenance'), routeName: 'page.maintenance', label: "Maintenance Page", children: [], icon: null },
            { href: route('page.success'), routeName: 'page.success', label: "Success Page", children: [], icon: null },
        ], icon: DocumentIcon
    },
];

const { isExpanded, isMobileOpen, isHovered, openSubmenu } = useSidebar();
</script>

<template>
    <aside
        :class="[
            'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-99999 border-r border-gray-200',
            {
                'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
                'lg:w-[90px]': !isExpanded && !isHovered,
                'translate-x-0 w-[290px]': isMobileOpen,
                '-translate-x-full': !isMobileOpen,
                'lg:translate-x-0': true,
            },
        ]"
        @mouseenter="!isExpanded && (isHovered = true)"
        @mouseleave="isHovered = false"
    >
        <div
            :class="[
                'py-8 flex',
                !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
            ]"
        >
            <a aria-current="page" href="/" class="router-link-active router-link-exact-active">
                <img class="dark:hidden" src="https://vue-demo.tailadmin.com/images/logo/logo.svg" alt="Logo"
                    width="150" height="40"
                    :class="[
                        !isExpanded ? 'hidden' : ''
                    ]">
                <img class="hidden dark:block" src="https://vue-demo.tailadmin.com/images/logo/logo-dark.svg" alt="Logo"
                    width="150" height="40"
                    :class="[
                        !isExpanded ? 'hidden' : ''
                    ]">
                <img
                    :class="[
                        !isExpanded ? '' : 'hidden'
                    ]"
                    src="https://vue-demo.tailadmin.com/images/logo/logo-icon.svg" alt="logo" />
            </a>
        </div>
        <div class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
            <nav class="mb-6">
                <div class="flex flex-col gap-4">
                    <div>
                        <h2 
                            :class="[
                                'mb-4 text-xs uppercase flex leading-[20px] text-gray-400',
                                !isExpanded && !isHovered
                                ? 'lg:justify-center'
                                : 'justify-start',
                            ]">Menu</h2>
                        <NavItem
                            :item="item"
                            :is-collapsed="!isExpanded && !isHovered"
                            v-for="item in navItems"
                            :key="item.label"
                            :active="route().current(item.routeName)" />
                    </div>
                </div>
            </nav>
        </div>
    </aside>
</template>