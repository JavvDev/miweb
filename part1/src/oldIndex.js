import React , {useState}from 'react'
import ReactDOM from 'react-dom'


const App = (props) => {
  const [ contador, setContador] = useState(0)

  console.log("render..")


 const handleClick = [
  () => {
    setContador(prevContador => {
      return prevContador + 1
  })
 },
  () => {
    setContador(prevContador => {
      return prevContador - 1
    })
  },
  () => {
    setContador(0)
  }]
  

  const isEven = contador % 2 === 0
  return (
    <div>
      <p>Contador en React</p>
      <h1>{contador}</h1>
      <h2>{isEven ? 'Es Par' : 'Es Impar'}</h2>

      <button onClick={handleClick[0]}>
        Incrementar
      </button>
      <button onClick={handleClick[1]}>
        Disminuir
      </button>
      <button onClick={handleClick[2]}>
        Reset
      </button>

    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
