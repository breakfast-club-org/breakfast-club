import { useState } from 'react'
// import './App.css'
import './App.scss';
import AdvancedButtons from "./components/advanced-buttons/AdvancedButtons";
import NumericButtons from './components/numeric-buttons/NumericButtons';
import OperationButtons from './components/operation-buttons/OperationButtons';
import Results from "./components/results/Results";

function App() {
  const [display, setDisplay] = useState(0);

  return (
    <div className="App">
      {/* <h1>Calculator</h1> */}
      <main className="calc-container">
        {/* <div className="results-container">
          <div className="results">{display}</div>
        </div> */}
        <Results display={display}/>
        <div className="calc-btns-container">
          <AdvancedButtons />
          <OperationButtons />
          <NumericButtons displayHandler={display => setDisplay(display)} />
        </div>
      </main>
    </div>
  )
}

export default App
