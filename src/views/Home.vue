<template>
  <main id="container">
    <div class="searchDiv">
      <h1>{{ app_title }}</h1>
      <form>
        <i class="bi bi-geo-alt-fill customIcon"></i>
        <input type="text" v-model="params.search" :placeholder="search_placeholder">
        <button type="button" @click.prevent="getWeather" @keypress.prevent.enter="getWeather">Search <i class="bi bi-search"></i></button>
      </form>
    </div>
    <section>
      <div class="weather-card p-5" v-if="result.list.length == 0">No results</div>
      <div id="carouselExample" class="carousel slide w-50 d-flex flex-column align-items-center" v-else>
        <div class="carousel-inner w-75 p-2">
          <div class="weather-card carousel-item" :class="index == 0 ? 'active' : ''" v-for="(item, index) in result.list" :key="index">
            <div class="content">
              <span>{{ result.city.name }} - {{ result.city.country }}</span>
              <h2>{{ item.main.temp }} ºC</h2>
              <small>Population: {{ result.city.population }}</small>
              <hr>
              <div class="d-flex flex-column align-items-center">
                <img :src="'https://openweathermap.org/img/wn/'+ item.weather[0].icon +'@2x.png'" style="width: 100px;">
                <small>{{ item.weather[0].description }}</small>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <footer>
      <p class="m-0">Developed by <a href="https://github.com/YoungC0DE">Rafael Anjos</a></p>
      <span>YoungC0DE</span>
    </footer>
  </main>
</template>

<script>
import { SEARCH_PLACEHOLDER, APP_TITLE } from '@/core/helpers/constants';
import axios from 'axios';

export default {
  data() {
    return {
      app_title: APP_TITLE,
      search_placeholder: SEARCH_PLACEHOLDER,
      result: {
        list: []
      },
      params: {
        search: '',
        units: 'metric',
        lang: 'en'
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

          that.result = data;
          that.$toast.success('Data loaded');
        })
        .catch((err) => {
          that.$toast.error(err);
        })
    },
  },
}
</script>
