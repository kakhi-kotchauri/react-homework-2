import { Counter } from './counter'
import './App.css';

function App() {

  return (
     <div>

      <Counter startvalue = {10} step = {1}/>
      <Counter startvalue = {50} step = {5}/>
      <Counter startvalue = {100} step = {10}/>

     </div>
  )
}

export default App;
