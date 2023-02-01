import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>


const Element = ({part, exercise}) => {
  return (
  <p>
  {part} {exercise}
  </p>
  )
}

const Total = ({exercise1, exercise2, exercise3}) => <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Title course={course}/>
      <Element part={part1} exercise={exercises1}/>
      <Element part={part2} exercise={exercises2}/>
      <Element part={part3} exercise={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
    </>
  )
}

ReactDOM.render(
<App />,
document.getElementById('root'))