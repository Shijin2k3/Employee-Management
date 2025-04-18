
import './App.css'
import { Header } from './components/layouts/Header'
import { Footer } from './components/layouts/Footer'
import { Home } from './components/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Login } from './components/user/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
    <Router>   
      <div>
        <Header/>
        <ToastContainer />
          <Routes>
            <Route  path='/' element={ <Home/>}/>
            <Route  path='/login' element={ <Login/>}/>
          </Routes>
        <Footer />
      </div>
    </Router>

    
  )
}

export default App
