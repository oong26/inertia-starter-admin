<script setup>
import { Link } from '@inertiajs/vue3';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon, MoonIcon } from '@heroicons/vue/24/solid';
import { BellIcon} from '@heroicons/vue/24/outline';
import { ref, inject, onMounted, onBeforeUnmount } from 'vue';
import { useUIStore } from '@/Stores/useUIStore';
import NotificationDropdown from './Components/NotificationDropdown.vue';
import ProfileDropdown from './Components/ProfileDropdown.vue';
import { useSidebar } from '@/Composables/useSidebar';
import ThemeToggler from '@/Components/ThemeToggler.vue';

const ui = useUIStore()
const notificationBox = ref(null)
const notifButtonClick = ref(false)
const profileBox = ref(null)
const profileButtonClick = ref(false)

function handleClickOutside(event) {
    const el = notificationBox.value
    if (!notifButtonClick.value) {
        if (el instanceof HTMLElement && !el.contains(event.target)) {
            ui.closeNotification()
        }
    }
    notifButtonClick.value = false;

    const elProf = profileBox.value
    if (!profileButtonClick.value) {
        if (el instanceof HTMLElement && !el.contains(event.target)) {
            ui.closeProfile()
        }
    }
    profileButtonClick.value = false;
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})

const { toggleSidebar, toggleMobileSidebar, isMobileOpen } = useSidebar();

const handleToggle = () => {
    if (window.innerWidth >= 1024) {
        toggleSidebar()
    }
    else {
        toggleMobileSidebar()
    }
}

const isApplicationMenuOpen = ref(false)

const toggleApplicationMenu = () => {
    isApplicationMenuOpen.value = !isApplicationMenuOpen.value
}

function toggleNotification() {
    notifButtonClick.value = true
    ui.toggleNotification()
}

function toggleProfile() {
    profileButtonClick.value = true
    ui.toggleProfile()
}
</script>

<template>
    <header class="sticky top-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 xl:border-b">
        <div class="flex flex-col items-center justify-between grow xl:flex-row xl:px-6">
            <div class="flex items-center justify-between w-full gap-2 px-3 py-3 border-b border-gray-200 dark:border-gray-800 sm:gap-4 xl:justify-normal xl:border-b-0 xl:px-0 lg:py-4">
                <button
                    @click="handleToggle"
                    class="flex items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg z-99999 dark:border-gray-800 dark:text-gray-400 lg:h-11 lg:w-11 lg:border"
                    :class="[
                        isMobileOpen
                            ? 'lg:bg-transparent dark:lg:bg-transparent bg-gray-100 dark:bg-gray-800'
                            : '',
                    ]"
                    aria-label="Toggle Sidebar Button"
                >
                    <Bars3CenterLeftIcon class="w-6 h-6 fill-gray-500 dark:fill-gray-400" />
                </button>
                <a aria-current="page" href="/dashboard" class="router-link-active router-link-exact-active xl:hidden">
                    <img class="dark:hidden" src="https://vue-demo.tailadmin.com/images/logo/logo.svg" alt="Logo">
                    <img class="hidden dark:block" src="https://vue-demo.tailadmin.com/images/logo/logo-dark.svg" alt="Logo">
                </a>
                <button
                    @click="toggleApplicationMenu"
                    class="flex items-center justify-center w-10 h-10 text-gray-700 rounded-lg z-99999 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 xl:hidden">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillrule="evenodd" cliprule="evenodd" d="M5.99902 10.4951C6.82745 10.4951 7.49902 11.1667 7.49902 11.9951V12.0051C7.49902 12.8335 6.82745 13.5051 5.99902 13.5051C5.1706 13.5051 4.49902 12.8335 4.49902 12.0051V11.9951C4.49902 11.1667 5.1706 10.4951 5.99902 10.4951ZM17.999 10.4951C18.8275 10.4951 19.499 11.1667 19.499 11.9951V12.0051C19.499 12.8335 18.8275 13.5051 17.999 13.5051C17.1706 13.5051 16.499 12.8335 16.499 12.0051V11.9951C16.499 11.1667 17.1706 10.4951 17.999 10.4951ZM13.499 11.9951C13.499 11.1667 12.8275 10.4951 11.999 10.4951C11.1706 10.4951 10.499 11.1667 10.499 11.9951V12.0051C10.499 12.8335 11.1706 13.5051 11.999 13.5051C12.8275 13.5051 13.499 12.8335 13.499 12.0051V11.9951Z" fill="currentColor"></path>
                    </svg>
                </button>
                <div class="hidden xl:block">
                    <form>
                        <div class="relative">
                            <label for="search-input" class="sr-only">Search or type command</label>
                            <span class="absolute -translate-y-1/2 left-4 top-1/2 pointer-events-none">
                                <MagnifyingGlassIcon class="w-6 h-6 fill-gray-500 dark:fill-gray-400" />
                            </span>
                            <input id="search-input" type="text" placeholder="Search or type command..." class="dark:bg-dark-900 h-11 w-full rounded-lg border border-gray-200 bg-transparent py-2.5 pl-12 pr-14 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-800 dark:bg-gray-900 dark:bg-white/[0.03] dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 xl:w-[430px]">
                            <button type="button" class="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-[7px] py-[4.5px] text-xs -tracking-[0.2px] text-gray-500 dark:border-gray-800 dark:bg-white/[0.03] dark:text-gray-400" aria-label="Focus search input (Cmd+K)">
                                <span aria-hidden="true"> ⌘ </span>
                                <span aria-hidden="true"> K </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                :class="[isApplicationMenuOpen ? 'flex' : 'hidden']"
                class="items-center justify-between w-full gap-4 px-5 py-4 shadow-theme-md lg:flex lg:justify-end lg:px-0 lg:shadow-none"
            >
                <div class="flex items-center gap-2 2xsm:gap-3">
                    <ThemeToggler />
                    <div class="relative">
                        <button @click="toggleNotification" class="relative flex items-center justify-center text-gray-500 transition-colors bg-white border border-gray-200 rounded-full hover:text-dark-900 h-11 w-11 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                            aria-label="Notification Button">
                            <span class="flex absolute right-0 top-0.5 z-1 h-2 w-2 rounded-full bg-orange-400">
                                <span class="absolute inline-flex w-full h-full bg-orange-400 rounded-full opacity-75 -z-1 animate-ping"></span>
                            </span>
                            <BellIcon class="w-6 h-6" />
                        </button>
                        <div ref="notificationBox">
                            <NotificationDropdown v-if="ui.showNotification" />
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <button @click="toggleProfile" class="flex items-center text-gray-700 dark:text-gray-400">
                        <span class="mr-3 overflow-hidden rounded-full h-11 w-11">
                            <img src="https://vue-demo.tailadmin.com/images/user/owner.png" alt="User">
                        </span>
                        <span class="block mr-1 font-medium text-theme-sm">Musharof</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class=""><path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                    <div ref="profileBox">
                        <ProfileDropdown v-if="ui.showProfile" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>