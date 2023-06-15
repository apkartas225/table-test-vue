import axios from 'axios';
export const fetchedString = async (str) => {
    
        try {
            const { data } = await axios( `https://swapi.dev/api/people/?search=${str}` );
            return data?.results;
        } catch ( { message } ) {
            console.log( 'error', message )
        }
}   
