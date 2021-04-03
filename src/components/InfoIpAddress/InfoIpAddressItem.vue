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
  max-width: 150px;
  margin-top: 16px;
  align-items: center;

  .label{
    font-size: 1.2rem;
    letter-spacing: 0.12em;
    font-weight: bold;
    color: hsl(0, 0%, 59%);
    margin-bottom: 12px;
    text-align: center;
  }

  .value{
    text-align: center;
    font-size: 2.4rem;
    font-weight: 500;
    color: hsl(0, 0%, 17%);
  }


  @media (min-width: 1091px) {
    margin-right: 28px;
    align-items: flex-start;
    &.divider{
      padding-left: 28px;
      border-left: 1px solid hsl(0, 0%, 80%);
    };

    .value, .label{
      text-align: start;
    }
  }

}
</style>