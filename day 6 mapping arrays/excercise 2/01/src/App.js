
import './App.css';
import React, { useState } from 'react';


function App() {
  const [start, setStart] = useState('0');
  const [end, setEnd] = useState('');

  function fetchData() {
    setStart(document.getElementById('start').value);
    setEnd(document.getElementById('end').value);
  }
  return (
    <div className='app'>
      <Header fetchData={fetchData} />
      <DataGrid start={start} end={end} />
    </div>
  )
}

function Header({ fetchData }) {
  return (
    <div className="header">
      <div><h1>30 Days Of React</h1></div>
      <div><h3>Number Generator</h3></div>
      <div><h3>evens are green, odds are yellow and prime numbers are red</h3></div>
      <div className="input_form">
        <div><input className="start" type="number" name="start" id="start" placeholder='Starting Number' /></div>
        <div><input className="end" type="number" name="end" id="end" placeholder='Ending Number' /></div>
        <button type="submit" onClick={fetchData} >Submit</button>
      </div>
    </div>)
}

function DataGrid({ start, end }) {
  const items = [];

  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      items.push(<div key={i} className='data1'><h1>{i}</h1></div>)
    }
    else if (i % 2 === 0) {
      items.push(<div key={i} className='data2'><h1>{i}</h1></div>)
    }
    else {
      items.push(<div key={i} className='data3'><h1>{i}</h1></div>)
    }
  }
  return (
    <div className='databody'>
      {items}
    </div>
  );

}

export default App;

