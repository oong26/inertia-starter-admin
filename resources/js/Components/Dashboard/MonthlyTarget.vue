<script setup>
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/24/solid';
</script>
<script>
    import HighchartComponent from '../HighchartComponent.vue';

    export default {
        components: {
            HighchartComponent,
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        type: 'pie',
                        height: '230px',
                    },
                    accessibility: {
                        point: {
                            valueSuffix: '%'
                        }
                    },
                    title: {
                        text: '',
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            borderRadius: 8,
                            dataLabels: [{
                                enabled: true,
                                distance: 20,
                                format: '{point.name}'
                            }, {
                                enabled: true,
                                distance: -15,
                                format: '{point.percentage:.0f}%',
                                style: {
                                    fontSize: '0.9em'
                                }
                            }],
                            showInLegend: true
                        }
                    },
                    series: [{
                        name: 'Sales',
                        colorByPoint: true,
                        innerSize: '75%',
                        data: [{
                            name: 'Macbook pro 13"',
                            y: 23.9
                        }, {
                            name: 'Apple Watch Ultra',
                            y: 12.6
                        }, {
                            name: 'iPhone 15 Pro Max',
                            y: 37.0
                        }, {
                            name: 'iPad Pro 3rd Gen',
                            y: 26.4
                        }]
                    }]
                },
            };
        },
    };
</script>

<template>
    <div class="px-5 pt-5 bg-white shadow-default rounded-2xl pb-8 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div class="flex justify-between">
            <div>
                <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Monthly Sales</h3>
                <p class="mt-1 text-gray-500 text-theme-sm dark:text-gray-400"> Target you’ve set for each month </p>
            </div>
        </div>
        <div class="relative max-h-[195px]">
            <HighchartComponent :chartOptions="chartOptions" class="h-full"/>
        </div>
        <p class="mx-auto mt-6 pt-2 w-full max-w-[380px] text-center text-sm text-gray-500 sm:text-base"> You earn $3287 today, it's higher than last month. Keep up your good work! </p>
    </div>
    <div class="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
        <div>
            <p class="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">Target</p>
            <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <ArrowDownIcon class="w-5 text-error" />
            </p>
        </div>
        <div class="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
        <div>
            <p class="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">Revenue</p>
            <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <ArrowUpIcon class="w-5 text-success" />
            </p>
        </div>
        <div class="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>
        <div>
            <p class="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">Today</p>
            <p class="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
                $20K
                <ArrowUpIcon class="w-5 text-success" />
            </p>
        </div>
    </div>
</template>