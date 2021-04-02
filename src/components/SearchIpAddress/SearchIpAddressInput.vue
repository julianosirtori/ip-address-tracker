<template>
  <div class="search-input">
    <input placeholder="Search for any IP address or domain"/>
    <button>
      <img src="../../assets/icon-arrow.svg" />
    </button>
  </div>
</template>

<script>
  export default {
    name: "SearchIpAddressInput"
  }
</script>

<style lang="scss" scoped>
.search-input{  
  width: 100%;
  max-width: 520px;
  display: flex;
  flex-direction: row;



  input{
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 12px 16px;
    background: #fff;
    flex: 1;

    border: none;
    font-size: 16px;
  }

  button{
    background: #000;
    border: none;
    width: 48px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    
    img{
      height: 12px;
    }

    &:hover{
      cursor: pointer;
    }
  }
}


</style>