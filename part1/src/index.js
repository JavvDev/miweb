import ReactDOM from 'react-dom'
import Mensaje from './Mensaje'

const App = () => {

  // aqui se puede ejecutar todo el codigo de javascript que sea necesario

  return (
    <div>
        <Mensaje color="purple" message='Rebeca'/>
        <Mensaje color="pink" message='Vanessa'/>
        <Mensaje color="blue" message='Laleska'/>
        <Mensaje color="brown" message='Mafer'/>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)