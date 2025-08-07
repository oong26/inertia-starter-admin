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
                        type: 'column',
                        height: '183px'
                    },
                    title: {
                        text: ''
                    },
                    legend: {
                        enabled: false,
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nop', 'Dec'],
                        crosshair: true,
                        accessibility: {
                            description: 'Sales'
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: ''
                        },
                    },
                    plotOptions: {
                        column: {
                            pointPadding: 0.2,
                            borderWidth: 0
                        }
                    },
                    series: [
                        {
                            name: 'Sales',
                            data: [387749, 280000, 129000, 64300, 54000, 34300, 45321, 140000, 10000, 140500, 19500, 113500]
                        }
                    ]
                },
            };
        },
    };
</script>

<template>
    <div class="flex items-center justify-between">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white/90">Monthly Sales</h3>
    </div>
    <div class="max-w-full overflow-x-auto custom-scrollbar">
        <HighchartComponent :chartOptions="chartOptions" class="my-6"/>
    </div>
</template>