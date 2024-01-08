


import Login from './pages/login'
import Home from './pages/home';
import Employees from './pages/employees';
import Nopage from './pages/nopage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route,Navigate, BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar';
import Profile from './pages/profile';
import Register from './pages/register';


function App() {
  return (
    
      <BrowserRouter>
        
    
        
      <Routes>
          <Route path='/' element={<Navigate to="/login" replace={true} />}/>
          <Route path='login' element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<Navbar/>}>
          <Route path="home" element={<Home/>} />
          <Route path="employees" element={<Employees />} />
          <Route path="profile" element={<Profile />} />
          
          </Route>
          <Route path="*" element={<Nopage />} />
        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App