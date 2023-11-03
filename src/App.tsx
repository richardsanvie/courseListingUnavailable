import EstiloGlobal, { Container } from './Components/styles'
import BarraLateral from './Components/Containers/BarraLateral'
import ListaDeTarefas from './Components/Containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
