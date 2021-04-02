<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";

import L from 'leaflet';

export default {
  name: "Map",
  data() {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap();
  },
  methods: {
    initMap() {
      this.map = L.map('mapContainer').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);  
    }
  },
}
</script>

<style lang="scss" scoped>
#mapContainer{
  width: 100%;
  flex: 1;
}
</style>