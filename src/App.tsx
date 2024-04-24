import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div>
        <div className="container">
          <Header />
        </div>
        <Banner />
      </div>
    </>
  )
}

export default App
