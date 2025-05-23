
import './App.css'
import { Header } from './components/layouts/Header'
import { Footer } from './components/layouts/Footer'
import { Home } from './components/Home'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import { Login } from './components/user/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Register } from './components/user/Register'
import { useEffect } from 'react'
import store from './store'
import { loadUser } from './actions/userActions'
import { Profile } from './components/user/Profile'
import ProtectedRoute from './components/route/ProtectedRoute'
import { UpdateProfile } from './components/user/UpdateProfile'
import UpdatePassword from './components/user/UpdatePassword'
import Dashboard from './components/admin/Dashboard'


function App() {

  useEffect(()=>{
    store.dispatch(loadUser)
  })


  return (
    <Router>   
      <div>
        <Header/>
          <div>
            <ToastContainer />
            <Routes>
              <Route  path='/' element={ <Home/>}/>
              <Route  path='/login' element={ <Login/>}/>
              <Route  path='/register' element={ <Register/>}/>
              <Route  path='/myprofile' element={ <ProtectedRoute><Profile/></ProtectedRoute>}/>
              <Route  path='/myprofile/update' element={ <ProtectedRoute><UpdateProfile/></ProtectedRoute>}/>
              <Route  path='/myprofile/update/password' element={ <ProtectedRoute><UpdatePassword/></ProtectedRoute>}/>
              
            </Routes>
          </div>
          <Routes>
            <Route path='/admin/dashboard' element={<Dashboard/>}/>
          </Routes>

        <Footer />
      </div>
    </Router>

    
  )
}

export default App
