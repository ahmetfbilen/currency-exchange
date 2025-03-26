import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios';


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_oieON4f4F1AldTuyiceRNaLcpabkDnI6gyZKg07l";


function Currnecy() {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {

        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);


    };

    return (
        <div className="currency-div">
            <div style={{
                fontFamily: "Arial",
                backgroundColor: "#a97c50",
                color: "white",
                width: "100.5%",
                textAlign: "center"
            }}>
                <h3>DÖVİZ KURU</h3>
            </div>
            <div style={{ marginTop: "50px" }}>
                {/* Negatif değerleri engelleyen input */}
                <input
                    value={amount}
                    onChange={(e) => setAmount(Math.max(0, e.target.value))}
                    type="number"
                    className="amount"
                />

                <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="from-currency-option"
                >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <FaArrowRight className="arrow-icon" />

                <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="to-currency-option"
                >
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>

                <input value={result} type="number" className="result" readOnly />

                <div style={{ textAlign: "center" }}>
                    <button onClick={exchange} className="exchange-button">
                        ÇEVİR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Currnecy
