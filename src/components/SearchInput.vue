<template>
    <div>
        <label for="">
            <input @change=" searchPeoples " @input=" !$event.target.value ? filteredDataArray = [] : '' ">
            <img src="../assets/img/search2.png" alt="">

        </label>
        <div class="items-wrapper">
            <div class="item" v-for="(   item, i   ) in filteredDataArray" :key=" i " @click=" () => navigate( item, i ) ">
                <div>{{ item.name }}</div>
                <div>{{ item.height }}</div>
                <div>{{ item.mass }}</div>
            </div>
        </div>

    </div>
</template>

<script>
import { fetchedString } from '@/service/api.js';
import { mapState, mapMutations } from 'vuex';

export default {
    data: () => ( {
        searchedArr: [],
        filteredDataArray: [],
    } ),
    computed: {
        ...mapState( [
            'data',
        ] )
    },
    methods: {
        ...mapMutations( [
            'setPeopleInfo'
        ] ),
        async searchPeoples( e ) {
            if ( !e.target.value ) {
                this.filteredDataArray = [];
                return
            };
            this.filteredDataArray = await fetchedString( e.target.value )
        },
        navigate( row, i ) {
            this.setPeopleInfo( row )
            this.$router.push( { path: `/peoples/${i}` } )
        }
    },
}
</script>

<style>
input {
    padding-left: 10px;
    margin-top: 30px;
    outline: none;
    height: 30px;
    width: 150px;
    border-radius: 12px;
    border-color: teal;

}

.items-wrapper {
    border-radius: 6px;
    width: 200px;
    margin-top: 10px;
    max-height: 600px;
    overflow-y: auto;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}

.item {
    cursor: pointer;
    font-size: 16px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px;
    border-bottom: 1px solid #a49e9e;
    color: #2f2c2c;

}

img {
    cursor: pointer;
    width: 18px;
    position: relative;
    left: -30px;
    top: 4px;
}
</style>