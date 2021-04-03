<template>
  <div id="mapContainer"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import useIpAddress from "@/models/ipAddress"; 
import {ref, onMounted, watch} from 'vue';
import LocationIcon from "@/assets/icon-location.svg";
import L from 'leaflet';

export default {
  name: "Map",
  setup(){
    let map = ref(null);
    
    let {ipAddress} = useIpAddress();

    const initMap = () => {

      map.value = L.map('mapContainer').setView([ 51.505, -0.09], 13);

      L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        subdomains:['mt0','mt1','mt2','mt3']
      }).addTo(map.value);
    }
  
    watch(ipAddress, () => {
      const location = [ipAddress.value.location.lat, ipAddress.value.location.lng]

      map.value.setView(location, 15);

      var IconMarker = L.icon({
        iconUrl: LocationIcon,
        iconAnchor: [32, 64]
      });

      L.marker(location, {icon: IconMarker}).addTo(map.value);
  
      },
    )


    onMounted(() => {
      initMap();
    })

    return {ipAddress}

  },
}
</script>

<style lang="scss" scoped>
#mapContainer{
  width: 100%;
  flex: 1;
}
</style>