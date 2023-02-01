import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={props.h1}>Good</button>
      <button onClick={props.h2}>Neutral</button>
      <button onClick={props.h3}>Bad</button>
      
      <div>{
        props.nf ? <h1>No Feedback</h1> 
        :
        <div>
          <h2>Estadisticas</h2> 
          <ul>
            <li>Good: {props.g}</li>
            <li>Neutral: {props.n}</li>
            <li>Bad: {props.b}</li>
            <li>Total: {props.tC}</li>
            <li>Promedio: {props.prom / props.tC}</li>
            <li>Positivas: {(props.g / props.tC) * 100}%</li>
          </ul>
        </div>
      }</div>
    </div>
)
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClick] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    totalClicks: 0,
    promedio: 0,
    nGF: true
  }
  )

  const handleClick = [
    () => {
      setClick(() => {
        return {
          ...clicks,
          good: clicks.good + 1,
          totalClicks: clicks.totalClicks + 1,
          promedio: clicks.promedio + 1,
          nGF: false
      }
      })
    },
    () => {
      setClick(() => {
        return {
          ...clicks,
          neutral: clicks.neutral + 1,
          totalClicks: clicks.totalClicks + 1,
          nGF: false
      }
      })
    },
    () => {
      setClick(() => {
        return {
          ...clicks,
          bad: clicks.bad + 1,
          totalClicks: clicks.totalClicks + 1,
          promedio: clicks.promedio - 1,
          nGF: false
      }
      })
    }
  ]

  return (
    <div>
      <Statistics h1={handleClick[0]} h2={handleClick[1]} h3={handleClick[2]} g={clicks.good} n={clicks.neutral} b={clicks.bad} tC={clicks.totalClicks} prom={clicks.promedio} nf={clicks.nGF}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)