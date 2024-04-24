import Header from './components/Header'
import { Container, GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <Container>
          <Header />
        </Container>
      </div>
    </>
  )
}

export default App
