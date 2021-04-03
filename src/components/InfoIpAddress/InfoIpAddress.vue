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
  margin-left: 32px;
  margin-right: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 160px;
  z-index: 999;

  @media (max-width: 1090px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 680px;
  }

  @media (max-width: 680px) {
    max-width: 380px;
  }

  @media (max-width: 400px) {
    max-width: 300px;
  }
}
</style>