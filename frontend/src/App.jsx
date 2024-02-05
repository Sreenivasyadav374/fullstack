


import Login from './pages/login/login'
import Home from './pages/home/home';
import Employees from './pages/employees';
import Nopage from './pages/nopage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes, Route,Navigate, BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Profile from './pages/profile/profile';
import Register from './pages//register/register';
import SignupForm from './pages/formik';


function App() {
  return (
    
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Navigate to="/login" replace={true} />}/>
          <Route path='login' element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="formik" element={<SignupForm />} />
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
