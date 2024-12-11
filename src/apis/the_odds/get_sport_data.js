import axios from 'axios'

export function get_sports(){

    var apiKey = import.meta.env.VITE_THE_ODDS;
    axios.get('https://api.the-odds-api.com/v4/sports', {params: {apiKey}})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log('Error status', error.response.status)
        console.log(error.response.data)
    })
} 

export function get_odds(sportKey, regions, markets, bookmakers){
    var oddsFormat = 'american'
    var apiKey = import.meta.env.VITE_THE_ODDS;
    axios.get(`https://api.the-odds-api.com/v4/sports/${sportKey}/odds`, {
        params: {
            apiKey,
            regions,
            markets,
            oddsFormat,
            bookmakers 
        }
    })
    .then(response => {
        // response.data.data contains a list of live and 
        //   upcoming events and odds for different bookmakers.
        // Events are ordered by start time (live events are first)
        console.log(JSON.stringify(response.data))
    
        // Check your usage
        console.log('Remaining requests',response.headers['x-requests-remaining'])
        console.log('Used requests',response.headers['x-requests-used'])
    
    })
    .catch(error => {
        console.log('Error status', error.response.status)
        console.log(error.response.data)
    })
}

get_sports()