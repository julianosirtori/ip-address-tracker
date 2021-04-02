<template>
  <div class="info-ip-address-item">
    <span class="label">{{label}}</span>
    <span class="value">{{value}}</span>
  </div>
</template>

<script>
  export default {
    name: "InfoIpAddressItem",
    props: ['label', 'value']
  }
</script>

<style lang="scss" scoped>
.info-ip-address-item{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 150px;

  .label{
    font-size: 12px;
    letter-spacing: 0.12em;
    font-weight: bold;
    color: #A2A2A2;
    margin-bottom: 12px;
  }

  .value{
    font-size: 24px;
    font-weight: 500;
    color: #2C2C2C;
  }
}
</style>