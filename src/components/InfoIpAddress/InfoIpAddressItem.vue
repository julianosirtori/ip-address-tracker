<template>
  <div class="info-ip-address-item" :class="divider && 'divider'">
    <span class="label">{{label}}</span>
    <span class="value">{{value}}</span>
  </div>
</template>

<script>
  export default {
    name: "InfoIpAddressItem",
    props: ['label', 'value', "divider"]
  }
</script>

<style lang="scss" scoped>
.info-ip-address-item{
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 28px;
  max-width: 150px;

  &.divider{
    padding-left: 28px;
    border-left: 1px solid hsl(0, 0%, 80%);
  }

  .label{
    font-size: 12px;
    letter-spacing: 0.12em;
    font-weight: bold;
    color: hsl(0, 0%, 59%);
    margin-bottom: 12px;
  }

  .value{
    font-size: 24px;
    font-weight: 500;
    color: hsl(0, 0%, 17%);
  }
}
</style>