import './App.css'
import ExampleComponent from './components/ExampleComponent'
import NoteFlowchart from './components/FlowChart'
import PricingStats from './components/PricingStats'
import CounterDemo from './components/CounterDemo'

function App() {
  return (
    <div className="App">
      
      <main className='p-4 space-y-8'>
        <ExampleComponent />
        <CounterDemo />
        <NoteFlowchart />
        <PricingStats />
        
      </main>
    </div>
  );
}

export default App;
