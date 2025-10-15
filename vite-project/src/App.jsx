import React from 'react'
import Nav from './Nav.jsx'
import Task6 from './task6.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
const skills = ["HTML","CSS","JS"]
function App() {
  return (
    <>
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task6' element={<Task6 name="Aadil" dept="AI & DS" skill={skills}/>}/>
        <Route path='/nav' element={<Nav/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='*' element={<h1>404 Not Found</h1>}/>
      </Routes>
    </Router>
     
    </>
      
  )
}

export default App
