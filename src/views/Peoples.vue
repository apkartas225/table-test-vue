<template>
  <div>
    <div>
      <MyTable :columns=" columns " :data=" data " />
      <SearchInput />
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import MyTable from '@/components/MyTable.vue';
import SearchInput from '@/components/SearchInput.vue'
export default {
  name: "Peoples-view",
  components: { MyTable, SearchInput },
  data() {
    return {
      columns: [ 'name', 'height', 'mass', 'hair_color', 'favorites' ],
    }
  },

  async mounted() {
    if ( this.data.length ) return;
    this.fetchedPeoples()

  },
  computed: {
    ...mapState( [
      'data',
    ] )
  },
  methods: {
    ...mapActions( [
      'fetchedPeoples'
    ] ),
    // ...mapMutations(['setPeoples']),
  }
}
</script>

