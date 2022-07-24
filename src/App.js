import './styles/App.css';
import './styles/User_profile.css'
import Component from './pages/signin';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import User_profile from './pages/User_profile';
import Test from './pages/Test';
import Navbar from './layout/Navbar'

import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  console.log('raed rahou bahi')
  var valeur = "rouja ray 5aybaaa"

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/signin' element ={<Component/>} />
        <Route path='/Register' element={<Register />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/test" element = {<Test/>}/>
        <Route path="/navbar" element ={<Navbar/>}/>
        <Route path='/userprofile' element={<User_profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
