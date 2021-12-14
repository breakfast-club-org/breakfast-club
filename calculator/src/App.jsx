// import { useState } from 'react'
// import './App.css'
import './App.scss';
import AdvancedButtons from "./components/advanced-buttons/AdvancedButtons";
import NumericButtons from './components/numeric-buttons/NumericButtons';
import OperationButtons from './components/operation-buttons/OperationButtons';

function App() {

  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <main className="calc-container">
        <div className="results-container">
          <div className="results">0</div>
        </div>
        <div className="calc-btns-container">
          <AdvancedButtons />
          <OperationButtons />
          <NumericButtons />
        </div>
      </main>
    </div>
  )
}

export default App
