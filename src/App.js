
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from "./Register/Register";
import Login from './Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';

export const URL= process.env.BACKEND_URL
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
      <Routes>
        <Route element={ <Register/>} path='/'/>
        <Route element={ <Login/>} path='/login'/>
        <Route element={  <Home/>} path='/dashboard'/>
       
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
