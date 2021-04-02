<template>
<div class="container-app">
  <SearchIpAddress>
    <InfoIpAddress/>
  </SearchIpAddress>
  <Map/>
</div>
</template>

<script>
import SearchIpAddress from "@/components/SearchIpAddress";
import InfoIpAddress from "@/components/InfoIpAddress";
import Map from "@/components/Map";

export default {
  name: "App",
  components: {
    SearchIpAddress,
    InfoIpAddress,
    Map
  },
}
</script>

<style lang="scss" scoped>
.container-app{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
}
</style>