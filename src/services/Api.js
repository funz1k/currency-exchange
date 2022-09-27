import axios from "axios";
// import { delayAdapterEnhancer } from 'axios-delay';

// axios.create({
//     adapter: delayAdapterEnhancer(axios.defaults.adapter)
// });

const ENDPOINT = 'https://api.privatbank.ua'

export const apiCurrency = async () => {
    return await axios.get(`${ENDPOINT}/p24api/pubinfo?json&exchange&coursid=5`, {
    })
        .then(response => response.data)
}