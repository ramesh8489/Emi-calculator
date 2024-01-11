import React, { useState } from 'react';
import './Calculator.css';
const Calculator1 = () => { 

  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);

  const calculateLoan= () => {
  
    const monthlyInterestRate = interestRate / 1200;
    const numberOfPayments = loanTerm * 12;

    const monthlyPaymentValue =
      (principal * monthlyInterestRate) /
      (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalInterestValue = (monthlyPaymentValue * numberOfPayments) - principal;
    const totalPaymentValue = monthlyPaymentValue * numberOfPayments;

    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
  };

  const resetForm = () => { 
    setPrincipal('');  
    setInterestRate('');
    setLoanTerm('');
    setMonthlyPayment(null); 
    setTotalInterest(null);
    setTotalPayment(null);
  }; 

  return (
    <div className='head'>
      <h1 className='title'>EMI Calculator</h1>
      
      <label className='box'>
        EMI Amount (₹):
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </label>

      <label className='box'>
        Annual Interest Rate (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </label>

      <label className='box'>
        EMI Term (years):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </label>
      < div className='top'>
      <button className='button' onClick={calculateLoan}>Calculate</button>

       <button  type="button" className='button' onClick={(resetForm) }>Reset</button>  
       </div>

      {monthlyPayment && (
        <div>
          <h3 className='size'>Monthly Payment: ₹{monthlyPayment}</h3>
          <h3 className='size'>Total Interest: ₹{totalInterest}</h3>
          <h3 className='size'>Total Payment: ₹{totalPayment}</h3>

        </div>
      )}


</div>
    
  
  );
};


export default Calculator1;