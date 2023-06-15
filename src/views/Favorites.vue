<template>
   <div>
     
    <div v-if="!data.filter(el => el.favorites).length">Избранных нет</div>
    <div v-else>
      <MyTable :columns="columns" :data="data.filter(el => el.favorites)"/>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import MyTable from '@/components/MyTable.vue'
export default {
  name: "Faforites-view",
  components: {MyTable},
  data() {
    return  {
       user: '',
       columns: [ 'name', 'height', 'mass', 'hair_color', 'favorites' ],
    }
   
  },
  
  computed: {
        ...mapState( [
            'data',
        ] )
    },
}
</script>

