import {useState} from 'react';

let currencyTable = [
    { from: "USD", to: "INR", rate: 82 },
    { from: "CAD", to: "INR", rate: 75 },
    { from: "Euro", to: "INR", rate: 87 },
]
export default function CurrencyCalculator({theme}) {
    let [amount, setAmount] = useState(0);
    let [fromCurrency, setFromCurrency] = useState(null);
    let [toCurrency, setToCurrency] = useState(null);

    let [convertedAmount, setConvertedAmount] = useState(0);
    function calculate() {
        currencyTable.forEach(record => {
            if (record.from === fromCurrency && record.to === toCurrency) {
                setConvertedAmount(amount * record.rate)
            }
        })
    }
    return (
        <div class="card"  data-bs-theme={theme}>
            <div class="card-body">
                <h5 class="card-title">Currency Converter</h5>
                <div class="mb-3">
                    <label for="amount-input" class="form-label">Amount</label>
                    <input class="form-control" id="amount-input" placeholder="amount" onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="From-Currency-input" class="form-label">From Currency</label>
                    <input class="form-control" id="From-Currency-input" placeholder="From Currency" onChange={(e) => setFromCurrency(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="To-Currency-input" class="form-label">To Currency</label>
                    <input class="form-control" id="To-Currency-input" placeholder="To Currency" onChange={(e) => setToCurrency(e.target.value)} />
                </div>
                <button type="button" class="btn btn-danger" onClick={calculate}>Calculate</button>
            </div>
            <div id="">{convertedAmount}</div>
        </div>
    )
}