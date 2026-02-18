import './App.css'
import { useCounterState } from './useCounterState'

export default function App() {
  const {count, handleDecrement, handleIncrement, handleReset} = useCounterState();

  return (
    <main>
    <section>
      <button onClick={handleDecrement}>−</button>
      <div>{count}</div>
      <button onClick={handleIncrement}>+</button>
    </section>
    <button onClick={handleReset}>❌</button>
    </main>
  )
}