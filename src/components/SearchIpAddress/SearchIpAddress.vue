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
  background-image: url('../../assets/pattern-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 240px;
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  position: relative;

  h1{
    color: #fff;
    margin-top: 32px;
    margin-bottom: 24px;
    font-size: 2.6rem;
  }
}
</style>