import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Buttons = (props) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={props.h1}>Good</button>
      <button onClick={props.h2}>Neutral</button>
      <button onClick={props.h3}>Bad</button>
    </div>
  )
}

const Statistics = (props) => {
  return (
        props.nf ? <h1>No Feedback</h1> 
        :
          <tr>
              <td><b>{props.text}</b></td>
              <td>{props.value}</td>
          </tr>
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
  const promPros = (clicks.promedio / clicks.totalClicks)
  const positiveRating = ((clicks.good / clicks.totalClicks) * 100)

  return (
    <div>
      <Buttons h1={handleClick[0]} h2={handleClick[1]} h3={handleClick[2]}/>

      <table>
        <Statistics text="good" value={clicks.good} nf={clicks.nGF} />
        <Statistics text="neutral" value={clicks.neutral} nf={clicks.nGF} />
        <Statistics text="bad" value={clicks.bad} nf={clicks.nGF} />
        <Statistics text="total clicks" value={clicks.totalClicks} nf={clicks.nGF} />
        <Statistics text="average" value={promPros} nf={clicks.nGF} />
        <Statistics text="positive rating" value={positiveRating + '%'} nf={clicks.nGF} />
      </table>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)