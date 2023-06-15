<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="( el, i ) in columns" :key=" i ">
                        {{ el }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" ( row, i ) in  data" :key=" i ">

                    <td v-for="  key  in columns" :key=" key ">
                        <div v-if=" key === 'favorites' ">
                            <button @click=" clickHandler( row ) " :class=" { 'active': row.favorites } ">{{
                                row.favorites ?
                                'remove' : 'add' }}</button>
                        </div>
                        <div v-else>
                            {{ row[ key ] }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

import { mapMutations } from 'vuex'
export default {
    name: "my-table",
    props: {
        data: {
            required: true,
            type: Array,
            default: () => []
        },
         columns: {
            required: true,
            type: Array,
            default: () => []
        }
    },
    
    // ['data', 'columns'],
   
    methods: {
        ...mapMutations( [ 'setFavorites' ] ),

        clickHandler( row ) {
            this.setFavorites( row )
        }
    }
}
</script>
<style scoped>
table {
    margin-top: 20px;
    border-radius: 3px;
    background-color: #fff;
    width: 100%;
}

th {
    background-color: teal;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

td {
    background-color: #f9f9f9;
    text-align: center;

}

th,
td {
    padding: 10px 5px;
}

.active {
    background: rgb(202, 169, 169);
    border-radius: 5px;
}
</style>
