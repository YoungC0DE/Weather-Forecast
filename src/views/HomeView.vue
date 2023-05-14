<template>
  <main id="container">
    <div class="searchDiv">
      <h1>Weather Forecast</h1>
      <form>
        <i class="bi bi-geo-alt-fill customIcon"></i>
        <input type="text" v-model="search" placeholder="Ex: New York">
        <button type="button" @click="getWeather">Search <i class="bi bi-search"></i></button>
      </form>
    </div>
    <section>
      <div class="weather-card" v-for="(i, id) in 5" :key="id">
        <h2>Embu das Artes - SP</h2>
        <span>23º C</span>
        <hr>
        <div>grafico</div>
      </div>
    </section>
    <footer>
      <p class="m-0">Developed by <a href="https://github.com/YoungC0DE">Rafael Anjos</a></p>
      <span>YoungC0DE</span>
    </footer>
  </main>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: '',
      apiResult: {},
    }
  },
  methods: {
    getWeather() {
      if (!this.search) {
        return
      }

      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.search}&appid=${import.meta.env.VITE_API_KEY}&lang=pt_br&units=metric`

      axios.get(url)
        .then(({ data }) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    loadDataByUserLocation() {
      var that = this

      window.navigator.geolocation.getCurrentPosition(({ coords }) => {
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${import.meta.env.VITE_API_KEY}&lang=pt_br&units=metric`

        axios.get(url)
          .then(({ data }) => {
            console.log(data)
          })
          .catch((err) => {
            console.log(err)
          })
      }, () => { console.log('erro') })
    }
  },
  mounted() {
    //this.loadDataByUserLocation()
  }
}
</script>
