import { useEffect, useState } from 'react'
import { getUSD } from '../../services/api'
import { getEUR } from '../../services/api'
import { getBTC } from '../../services/api'
import { Container } from "./style"
import currencyImg from '../../assets/currency.png'

export function ConversionCards(props) {
    const [usd, setUsd] = useState([])
    const [eur, setEur] = useState([])
    const [btc, setBtc] = useState([])
    const [usdValue, setUsdValue] = useState(1)
    const [convertedUsd, setConvertedUsd] = useState(null)
    const [eurValue, setEurValue] = useState(1)
    const [convertedEur, setConvertedEur] = useState(null)
    const [btcValue, setBtcValue] = useState(1)
    const [convertedBtc, setConvertedBtc] = useState(null)
  

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

    function calcConversionUsd(){
        let usdInput = usdValue * Number(usd.result).toFixed(2)
        setConvertedUsd(usdInput)
    }
    function calcConversionEur(){
        let eurInput = eurValue * Number(eur.result).toFixed(2)
        setConvertedEur(eurInput)
    }
    function calcConversionBtc(){
        let btcInput = btcValue / Number(btc.result).toFixed(2)
        setConvertedBtc(btcInput)
    }
    useEffect(() => {
        calcConversionUsd()
        calcConversionEur()
        calcConversionBtc()
    })

console.log(usdValue);
    return (
        <Container>
            <div>
                <header>
                    <h3>Real para Dolar</h3>
                    <img src={currencyImg} alt="câmbio" />
                </header>
                <div className="price-conversion-container">
                    <input
                        type="number"
                        placeholder="R$ 1"
                        min={ 1 }
                        onChange={(e) => setUsdValue(e.target.value)}
                    />
                    <div className="price-converted">
                        <p>USD</p>
                        <span>$ {String(convertedUsd).toLocaleString("en-US", {style:"currency", currency:"USD"})}</span>
                    </div>
                </div>
            </div>
            <div>
                <header>
                    <h3>Real para Euro</h3>
                    <img src={currencyImg} alt="câmbio" />
                </header>
                <div className="price-conversion-container">
                    <input
                        type="number"
                        placeholder="R$ 1"
                        min={ 1 }
                        onChange={(e) => setEurValue(e.target.value)}
                    />
                    <div className="price-converted">
                        <p>EUR</p>
                        <span>€ {String(convertedEur).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}</span>
                    </div>
                </div>
            </div>
            <div>
                <header>
                    <h3>Real para BitCoin</h3>
                    <img src={currencyImg} alt="câmbio" />
                </header>
                <div className="price-conversion-container">
                    <input
                        type="number"
                        placeholder="R$ 1"
                        min={ 1 }
                        onChange={(e) => setBtcValue(e.target.value)}
                    />
                    <div className="price-converted">
                        <p>BTC</p>
                        <span>&#8383; {String(convertedBtc).toLocaleString('pt-br').substring(0,10)}</span>
                    </div>
                </div>
            </div>
        </Container>
    )
}