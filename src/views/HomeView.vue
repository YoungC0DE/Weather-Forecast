<template>
  <main id="container">
    <div class="searchDiv">
      <h1>Weather Forecast</h1>
      <form>
        <i class="bi bi-geo-alt-fill customIcon"></i>
        <input type="text" v-model="search" placeholder="Ex: New York">
        <button type="button" v-on:click="getWeather">Search <i class="bi bi-search"></i></button>
      </form>
    </div>
    <section>
      <div class="weather-card" v-for="(i, id) in 3" :key="id">
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
import Swal from "sweetalert2";

export default {
  data() {
    return {
      search: '',
      apiResult: {}
    }
  },
  methods: {
    getWeather() {
      if (this.search) {
        return
      }
    }
  }
}
</script>
