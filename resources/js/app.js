import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { createPinia } from 'pinia'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import clickOutside from './Directives/clickOutside';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pinia = createPinia()

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob('./Pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        // const vueApp = createApp({ render: () => h(App, props) }).use(plugin);
        // // Register directive
        // vueApp.directive('click-outside', clickOutside);
        // vueApp.mount(el);
        const app = createApp({ render: () => h(App, props) })
        app.use(plugin)
        app.use(pinia) // Register Pinia here
        app.mount(el)
        // return createApp({ render: () => h(App, props) })
        //     .use(plugin)
        //     .use(ZiggyVue)
        //     .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
