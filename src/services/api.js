import axios from "axios";

export async function getUSD() {
    return axios
        .get('https://api.exchangerate.host/convert?from=USD&to=BRL')
        .then(res => res.data)
}

export async function getEUR() {
    return axios
        .get('https://api.exchangerate.host/convert?from=EUR&to=BRL')
        .then(res => res.data)
}
export async function getBTC() {
    return axios
        .get('https://api.exchangerate.host/convert?from=BTC&to=BRL')
        .then(res => res.data)
}