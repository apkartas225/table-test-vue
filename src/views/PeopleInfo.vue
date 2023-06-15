<template>
    <MyTable :columns=" columns " :data=" peopleInfo " />
</template>

<script>
import MyTable from '@/components/MyTable.vue';
import { mapState } from 'vuex';
export default {
    name: "People-info",
    components: { MyTable },
    data() {
        return {
            columns: [ 'name', 'height', 'mass', 'hair_color',
                'birth_year', 'gender', 'created', 'edited',
                'homeworld', 'skin_color', 'url', 'eye_color', 'favorites' ],
        }

    },
    computed: {
        ...mapState( [
            'peopleInfo',
        ] )
    },
    mounted() {
        console.log( '$router', this.peopleInfo )
    }
}
</script>
