import { useEffect, useState } from 'react'
import { getUSD } from '../../services/api'
import { getEUR } from '../../services/api'
import { getBTC } from '../../services/api'
import { Container } from './styles'
import dollarImg from '../../assets/dollar.png'
import euroImg from '../../assets/euro.png'
import bitcoinImg from '../../assets/bitcoin.png'


export function Summary () {
    const [usd, setUsd] = useState([])
    const [eur, setEur] = useState([])
    const [btc, setBtc] = useState([])

    function fetchUsdData(){
        getUSD().then(setUsd)
    }

    function fetchEurData(){
        getEUR().then(setEur)
    }
    function fetchBtcData(){
        getBTC().then(setBtc)
    }

    useEffect(() =>{
        fetchUsdData()
        fetchBtcData()
        fetchEurData()
    },[])


    return (
        <Container>
 
                <div >
                    <header>
                        <p>Dolar</p>
                        <img src={dollarImg} alt="dólar" />
                    </header>
                    <strong>R$ {Number(usd.result).toLocaleString('pt-br')}</strong>
                    <p>Atualizado em : {String(usd.date).split('-').reverse().join('/')} </p>
                </div>
                <div >
                    <header>
                        <p>Euro</p>
                        <img src={euroImg} alt="Euro" />
                    </header>
                    <strong>R$ {Number(eur.result).toLocaleString('pt-br')}</strong>
                    <p>Atualizado em : {String(eur.date).split('-').reverse().join('/')} </p>
                </div>
                <div >
                    <header>
                        <p>BitCoin</p>
                        <img src={bitcoinImg} alt="Bitcoin" />
                    </header>
                    <strong>R$ {Number(btc.result).toLocaleString('pt-br')}</strong>
                    <p>Atualizado em : {String(btc.date).split('-').reverse().join('/')} </p>
                </div>

        </Container>
    )
}