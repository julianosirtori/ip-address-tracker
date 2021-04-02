<template>
  <div class="infos-ip-address">
   <info-ip-address-item label="IP ADDRESS" value="192.212.174.101" />
   <div class="divider"/>
   <info-ip-address-item label="LOCATION" value="Brooklyn, NY 10001" />
   <div class="divider"/>
   <info-ip-address-item label="TIMEZONE" value="UTC -05:00" />
   <div class="divider"/>
   <info-ip-address-item label="ISP" value="SpaceX Starlink" />
  </div>
</template>

<script>
import InfoIpAddressItem from './InfoIpAddressItem';

export default {
  name: "InfoIpAddress",
  components: {
    InfoIpAddressItem,
  },
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

  .divider{
    height: 72px;
    width: 1px;
    background: #A2A2A260;
  }
}
</style>