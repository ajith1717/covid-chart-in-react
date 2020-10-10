import axios from 'axios';


const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) =>{

    let changeableUrl = url;
    if (country) {
        changeableUrl =  `${url}/countries/${country}`
    }
    try {
        const {data} = await axios.get(changeableUrl) ;


        const modifiedData = {
            confirmed : data.confirmed,
            recovered : data.recovered,
            deaths : data.deaths,
            lastUpdate :data.lastUpdate
        }
        // console.log(modifiedData);
        return modifiedData;
    } catch (error) {
        console.log(error)
        
    }
}


// export const fetchDailyData = async () =>{
//     try {
//         const { data:countries } =await axios.get(`${url}/countries`);
//         // console.log(data)

//         return countries.map((country) => country.name);
        
//     } catch (error) {
//         console.log(console.error)
        
//     }
// }


export const fetchCountries =async () =>{
    try {
        const { data : {countries}} = await axios.get(`${url}/countries`);
        // const response = await axios.get(`${url}/countries`);


        // console.log(response)
        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log(error)
    }
}
