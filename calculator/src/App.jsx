// import { useState } from 'react'
// import './App.css'
import './App.scss';
import NumericButtons from './components/numeric-buttons/NumericButtons';

function App() {

  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <main className="calc-container">
        <div className="results-container">
          <div className="results">0</div>
        </div>
        <div className="calc-btns-container">
          <section className="advanced-btns-container">
            <div className="advanced-btns">
              <btn className="advanced-btn">AC</btn>
              <btn className="advanced-btn">+/-</btn>
              <btn className="advanced-btn">%</btn>
            </div>
          </section>
          <section className="operation-btns-container">
            <div className="operation-btns">
              <btn className="operation-btn">&divide;</btn>
              <btn className="operation-btn">&times;</btn>
              <btn className="operation-btn">-</btn>
              <btn className="operation-btn">+</btn>
              <btn className="operation-btn rounded-right-corner">=</btn>
            </div>
          </section>
          <NumericButtons />
        </div>
      </main>
    </div>
  )
}

export default App
