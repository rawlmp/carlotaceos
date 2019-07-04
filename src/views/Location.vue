<template>
  <v-container>
    <v-layout>
      <h1>Locatiojn page</h1>
      <v-btn color="blue" v-on:click="gpsLocation()" class="ml-5">add gps location</v-btn>
      <p>Lat = {{lat}} Lon ={{lon}}</p>
      <p>{{error}}</p>

      <formulario></formulario>
    </v-layout>
  </v-container>
</template>

<script>
import formulario from "../components/formulario";

export default {
  components: {
    formulario
  },
  data() {
    return { error: " ", lat: " ", lon: " " };
  },

  methods: {
    gpsLocation: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    }
  }
};
</script>

<style>
</style>
