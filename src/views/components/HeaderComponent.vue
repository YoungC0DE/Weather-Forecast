<template>
    <header class="searchDiv">
        <h1>{{ app_title }}</h1>
        <div class="form">
            <i class="bi bi-geo-alt-fill customIcon"></i>
            <input type="text" v-model="params.search" :placeholder="search_placeholder" @keypress.enter="getWeather">
            <button type="button" @click="getWeather">Search <i class="bi bi-search"></i></button>
        </div>
    </header>
</template>

<script>
import { SEARCH_PLACEHOLDER, APP_TITLE } from '@/core/helpers/constants';
import axios from 'axios';

export default {
    emits: ['result-data'],
    name: 'HeaderComponent',
    data() {
        return {
            app_title: APP_TITLE,
            search_placeholder: SEARCH_PLACEHOLDER,
            params: {
                search: '',
                units: 'metric',
                lang: 'pt_BR'
            }
        }
    },
    methods: {
        getWeather() {
            if (!this.params.search) {
                return
            }

            var that = this;
            axios.get(import.meta.env.VITE_API_BASE_URL, {
                params: {
                    q: that.params.search,
                    appid: import.meta.env.VITE_API_KEY,
                    lang: that.params.lang,
                    units: that.params.units
                }
            })
                .then(({ data }) => {
                    if (!data) {
                        that.$toast.error('No data found')
                        return
                    }

                    that.$emit('result-data', data);
                    that.$toast.success('Data loaded');
                })
                .catch((err) => {
                    that.$toast.error(err);
                })
        },
    },
}
</script>