import {secret as apiKey} from './get_api_key.js'
import axios from 'axios'

function get_all_active_sports(){
    axios.get('https://api.the-odds-api.com/v4/sports', {params: {apiKey}})
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log('Error status', error.response.status)
        console.log(error.response.data)
    })
}

get_all_active_sports()