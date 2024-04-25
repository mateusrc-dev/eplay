import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div>
        <div className="container">
          <Header />
        </div>
        <Rotas />
      </div>
    </BrowserRouter>
  )
}

export default App
