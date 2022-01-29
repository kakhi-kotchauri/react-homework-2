import { useState } from "react"
import { useEffect } from "react"

export function Counter(props) {
    const [start, setstart] = useState(props.startvalue || 0)
    const [inputvalue, setinputvalue] = useState('')
    const [number, setnumber] = useState(start)
    

    useEffect(() => {
       setnumber(start)
    },[start])

    function increase() {
        if(props.step){
          setnumber(number + props.step)
        } else {
        setnumber(number + 5)
        }
    }

    function decrease() {
        if(number > 0) {
        if(props.step){
            setnumber(number - props.step)
          } else {
          setnumber(number - 5)
          }
        }
    }

    function valueset() {
        if(inputvalue) {
            if(inputvalue >= 0) {
               setstart(parseInt(inputvalue))
            }
        }
    }

    return(
    <div className="content">

    <div className="counter-par">

        <h1 className="title">Counter</h1>
        <h2 className="step">{`step = ${props.step || 5}`}</h2>
        
     <div className="inputpar">

        <input 
        value={inputvalue}
        onChange={(e) => setinputvalue(e.target.value)}
        className="input" 
        type="number"
        placeholder="start value"
        />

        <button onClick={() => valueset()} className="buttons">set</button>

    </div>

     <div className="buttonpar">

        <button className="buttons" onClick={ () => decrease()}>decrease</button>
        <button className="buttons" onClick={ () => increase()}>increase</button>
        </div>
        <p className="displaynum">output</p>
        <p className="displaynum">{number}</p>

    </div>

    </div>
    )
}

