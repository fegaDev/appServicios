import './App.css';
import {Routes,Route,Navigate} from 'react-router';
import Init from './layouts/Init.jsx';
import Dashboard from './layouts/Dashboard.jsx';
import {useState} from 'react';
function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <Routes>
      <Route path="/" element={!isLoggedIn ? <Init onLoginSuccess={()=>setIsLoggedIn(true)} /> : <Navigate to ="/dashboard" replace/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>

  )
}

export default App
