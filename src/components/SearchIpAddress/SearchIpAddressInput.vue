<template>
  <form class="search-input">
    <input v-model="ip" placeholder="Search for any IP address or domain"/>
    <button @click="handleSubmit" :disabled="loading">
      <img src="../../assets/icon-arrow.svg" />
    </button>
  </form>
</template>

<script>
import useIpAddress from "@/models/ipAddress"; 
import {ref, onMounted} from 'vue';

export default {
  name: "SearchIpAddressInput",
  setup(){
    const {findAddressByIp, loading} = useIpAddress();
    const ip = ref('');

    onMounted(() => {
      findAddressByIp('');
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      findAddressByIp(ip.value);
    }

    return {ip, handleSubmit, loading};
  }
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

    &:disabled{
      opacity: 0.5;
    }
  }
}


</style>