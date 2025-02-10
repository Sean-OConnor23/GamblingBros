import axios from 'axios';

var apiKey = import.meta.env.VITE_THE_ODDS;


/*
    First get a list of in-season sports
        the sport 'key' from the response can be used to get odds in the next request

*/

export default function getSports(){
    var data = "L"
    axios.get('https://api.the-odds-api.com/v4/sports', {
        params: {
            apiKey
        }
    })
    .then(response => {
        
        data = JSON.stringify(response.data[0])
        console.log(data)
    })
    return data;
}
