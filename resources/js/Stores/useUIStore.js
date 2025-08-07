import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
    state: () => ({
        showNotification: false,
    }),
    actions: {
        toggleNotification() {
            this.showNotification = !this.showNotification;
        },
        closeNotification() {
            this.showNotification = false;
        },
    },
});
