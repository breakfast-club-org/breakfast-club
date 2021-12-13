// import { useState } from 'react'
// import './App.css'
import './App.scss';

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
              <btn className="operation-btn right-corner">=</btn>
            </div>
          </section>
          <section className="numeric-btns-container">
            <div className="numeric-btns">
              <btn className="numeric-btn">7</btn>
              <btn className="numeric-btn">8</btn>
              <btn className="numeric-btn">9</btn>
              <btn className="numeric-btn">4</btn>
              <btn className="numeric-btn">5</btn>
              <btn className="numeric-btn">6</btn>
              <btn className="numeric-btn">1</btn>
              <btn className="numeric-btn">2</btn>
              <btn className="numeric-btn">3</btn>
              <btn className="numeric-btn two-col left-corner">0</btn>
              <btn className="numeric-btn">.</btn>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
