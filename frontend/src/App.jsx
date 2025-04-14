
import './App.css'
import { Header } from './components/layouts/Header'
import { Footer } from './components/layouts/Footer'
import { Home } from './components/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'


function App() {


  return (
    <Router>   
      <div>
        <Header/>
          <Routes>
            <Route  path='/' element={ <Home/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>

    
  )
}

export default App
