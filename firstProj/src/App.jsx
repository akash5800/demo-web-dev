import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Car2 from './vehicle2.jsx';
import Greeting from './example.jsx';
import Car3 from './vehicle3.jsx'
import Home from './components/Home.jsx';
function App() {
  return (
    <>
      <Home/>
    <h1>React router demo</h1>
    <nav style={{marginBottom:"20px"}}>
      <link to="style={{margin:'10px'}}">Home</link>
      <link to="style={{margin:'10px'}}">About</link>
      <link to="style={{margin:'10px'}}">Contact</link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
