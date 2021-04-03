<template>
  <div class="infos-ip-address" v-if="ipAddress">
   <info-ip-address-item label="IP ADDRESS" :value="ipAddress.ip" />
   <info-ip-address-item :divider="true" label="LOCATION" :value="`${ipAddress.location.region} ${ipAddress.location.city}, ${ipAddress.location.country}`" />
   <info-ip-address-item :divider="true" label="TIMEZONE" :value="`UTC ${ipAddress.location.timezone}`" />
   <info-ip-address-item :divider="true" label="ISP" :value="ipAddress.isp" />
  </div>
</template>

<script>
import useIpAddress from "@/models/ipAddress"; 
import InfoIpAddressItem from './InfoIpAddressItem';

export default {
  name: "InfoIpAddress",
  components: {
    InfoIpAddressItem,
  },
  setup(){
    const {ipAddress, loading} = useIpAddress();
  
    return {ipAddress, loading};
  }
  
}
</script>

<style lang="scss" scoped>
.infos-ip-address{
  background: #fff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0px 0px 5px 0px rgba(50, 50, 50, 0.66);;
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: -70px;
  z-index: 999;
}
</style>