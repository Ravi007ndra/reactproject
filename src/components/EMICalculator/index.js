import { useContext, useState } from 'react';
import { SetThemeContext, ThemeContext } from '../../App';

export default function EMICalculator() {
    let [loanAmount, setLoanAmount] = useState(0);
    let [interestRate, setInterestRate] = useState(8);
    let [timePeriod, setTimePeriod] = useState(60);
    let [emi, setEMI] = useState(0);
    
    let {themeMode, setThemeMode} = useContext(ThemeContext)
    
    function calculate() {
        setEMI(loanAmount * interestRate * Math.pow((1 + interestRate), timePeriod) / [Math.pow((1 + interestRate), timePeriod) - 1])
    }

    function handleThemeToggle() {
        setThemeMode(themeMode === "light" ? "dark" : "light")
    }
    return (
        <div class="card" data-bs-theme={themeMode === "light" ? "light" : "dark"} >
            <div class="card-body">
                <h5 class="card-title">EMI Calculator</h5>
                <div class="mb-3">
                    <label for="loan-amount-input" class="form-label">Loan Amount</label>
                    <input class="form-control" id="loan-amount-input" placeholder="Loan amount" onChange={(e) => setLoanAmount(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="interest-rate-input" class="form-label">Interest Rate</label>
                    <input class="form-control" id="interest-rate-input" placeholder="Interest Rate" onChange={(e) => setInterestRate(e.target.value / 1200)} />
                </div>
                <div class="mb-3">
                    <label for="time-period-input" class="form-label">Time Period</label>
                    <input class="form-control" id="time-period-input" placeholder="Time Period" onChange={(e) => setTimePeriod(e.target.value)} />
                </div>
                <button type="button" class="btn btn-danger" onClick={calculate}>Calculate</button>
            </div>
            <div>EMI is: {emi}</div>
            <button onClick={handleThemeToggle}>Toggle Theme</button>
        </div>
    )
}