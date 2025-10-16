import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExampleComponent from './components/ExampleComponent'
import NoteFlowchart from './components/FlowChart'
import PricingStats from './components/PricingStats'

function App() {
  return (
    <div className="App">
      
      <main className='p-4 space-y-8'>
        <ExampleComponent />
        <NoteFlowchart />
        <PricingStats />
      </main>
    </div>
  );
}

export default App;
