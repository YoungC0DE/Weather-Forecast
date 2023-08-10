<template>
  <main id="container">
    <HeaderComponent @result-data="loadData"></HeaderComponent>
    <section>
      <div class="weather-card p-5" v-if="result.list.length == 0">No results</div>
      <div id="carouselExample" class="carousel slide w-100 d-flex flex-column align-items-center" v-else>
        <div class="carousel-inner w-75 p-2">
          <div class="weather-card carousel-item" :class="index == 0 ? 'active' : ''" v-for="(item, index) in result.list" :key="index">
            <div class="content">
              <span> {{ getDate(item.dt_txt) }} </span>
              <h2>{{ parseInt(item.main.temp) }} ºC</h2>
              <small>Population: {{ result.city.population }}</small>
              <hr>
              <div class="d-flex flex-column align-items-center">
                <span><i class="bi bi-clock"></i> {{ getTime(item.dt_txt) }} Horas</span>
                <img :src="'https://openweathermap.org/img/wn/' + item.weather[0].icon + '@2x.png'" style="width: 100px;">
                <p class="m-0"><i>{{ item.weather[0].description }}</i></p>
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
    <FooterComponent></FooterComponent>
  </main>
</template>

<script>
import { convertDate } from '@/core/services/convertDate.js';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';

export default {
  components: { FooterComponent, HeaderComponent },
  data() {
    return {
      result: {
        list: []
      },
    }
  },
  methods: {
    loadData(data) {
      this.result = data;
    },
    getDate(date) {
      return convertDate(date).date;
    },
    getTime(time) {
      return convertDate(time).time;
    }
  }
}
</script>
