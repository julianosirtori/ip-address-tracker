import {reactive, toRefs} from 'vue';

import {findIpAddressTracker} from '@/services/api';

const state = reactive({
  error: null,
  ipAddress: null,
  loading: false,
});


export default function useIpAddress() {
  const findAddressByIp = async (ip) => {
    state.loading = true;
    state.error = null;
    try {

      const response = await findIpAddressTracker(ip);
      state.ipAddress = response.data;

    } catch (error) {
      state.error = error;
    }
    state.loading = false;
  };

  return {...toRefs(state), findAddressByIp};
}