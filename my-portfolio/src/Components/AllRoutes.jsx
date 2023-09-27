import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skills from '../Pages/Skills'
import Project from '../Pages/Project'
import Contact from '../Pages/Contact'
import Resume from '../Pages/Resume'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about-me' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/resume' element={<Resume/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes