import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

//these headers are for shivamraiash2@gmail.com

// headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': '4f4667b194msh029200e22f0c5c3p1df7cejsn57f20fb724c2'
//   }

//headers for ashurai@gmail.com
// headers: {
//     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
//     'x-rapidapi-key': 'b70f829170msh9000fef7bf38041p1b206bjsne302c604421d'
//   }

//key for shivamkakashi@gmail.com
// 'x-rapidapi-key': 'ca251b028cmshb9de3e3a0814c81p149760jsn68fc39dc189f'

export const getPlacesData = async(sw,ne)=>{
    try{
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw?.lat || 0 ,
              tr_latitude: ne?.lat || 0,
              bl_longitude: sw?.lng || 0,
              tr_longitude: ne?.lng || 0,},
              headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': 'ca251b028cmshb9de3e3a0814c81p149760jsn68fc39dc189f'
              }
        }
            );

        return data
    }
    catch (error){
        console.log(error)
    }
}