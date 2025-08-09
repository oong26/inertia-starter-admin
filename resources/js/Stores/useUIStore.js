import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
    state: () => ({
        showNotification: false,
        showProfile: false,
    }),
    actions: {
        toggleNotification() {
            this.showNotification = !this.showNotification;
        },
        closeNotification() {
            this.showNotification = false;
        },
        toggleProfile() {
            this.showProfile = !this.showProfile;
        },
        closeProfile() {
            this.showProfile = false;
        },
    },
});
