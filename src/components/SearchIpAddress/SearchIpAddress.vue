<template>
  <div class="search-ip-address">
    <h1>IP Address Tracker</h1>
    <search-ip-address-input/>
    <slot/>
  </div>
</template>

<script>
import SearchIpAddressInput from './SearchIpAddressInput.vue';

export default {
  name: "SearchIpAddress",
  components: {
    SearchIpAddressInput,
  },
}
</script>

<style lang="scss" scoped>
.search-ip-address{
  background: url('../../assets/pattern-bg.png');
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 240px;
  width: 100%;
  position: relative;

  h1{
    color: #fff;
    margin-top: 32px;
    margin-bottom: 32px;
    font-size: 32px;
  }
}
</style>