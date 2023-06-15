import { createStore } from 'vuex'
import axios from 'axios';

const store = createStore( {
    state() {
        return {
            data: [],
            peopleInfo: [],
        }
    },

    actions: {
        fetchedPeoples: async ( { commit } ) => {
            try {
                const { data } = await axios( 'https://swapi.dev/api/people' );
                commit( 'setPeoples', data?.results )
            } catch ( { message } ) {
                console.log( 'error', message )
            }
        }
    },
    mutations: {
        setPeoples( state, data ) {
            state.data = data.map( el => { el.favorites = false; return el; } );
        },

        setPeopleInfo( state, row ) {
            if ( state.peopleInfo.length ) { state.peopleInfo = [] }

            const idx = state.data.findIndex( el => el.name.includes( row.name ) )
            console.log( 'first', state.data[ idx ] )
            state.peopleInfo.push( state.data[ idx ] )
        },

        setFavorites( { data }, row ) {
            const idx = data.indexOf( row )
            data[ idx ].favorites = !data[ idx ].favorites
        }
    },
} )
export default store
