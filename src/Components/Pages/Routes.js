import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Components........
import Header from "../Header"
import Footer from '../Footer'
// Pages.............
import Home from './Home'
import NoPage from './NoPage'
import About from './About/About'
import Contact from './Contact/Contact'
import Project from './Project/Project'

export default function Index() {
    return (
        <BrowserRouter>

        <Header/>

            <main>
                <Routes>
                    <Route path='/'   element={ <Home /> } />
                    <Route path='/project'   element={ <Project/> } />
                    
                    <Route path='/about'  element={ <About /> } />
                    <Route path='/contact'  element={ <Contact/> }/>


                    <Route path='*'  element={ <NoPage/> }/>
                </Routes>
            </main>


        <Footer/>

        </BrowserRouter>
    )
}