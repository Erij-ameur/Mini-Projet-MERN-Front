import Login from"./Pages/Login"
import Page404 from "./Pages/Page404"
import Add from "./Pages/Add"
import Home from "./Pages/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Register from "./Pages/Register"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Add" element={<Add/>}></Route>
        <Route path="/error" element={<Page404/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Register" element={<Register/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
