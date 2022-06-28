import React from 'react'
import Home from './Home'
import Project from '../Project'
import About from '../About'
import Contact from '../Contact'

import { Element } from 'react-scroll'

export default function index() {
    return (
        <>
            <Home />
            <Element name='projects' />
            <Project />
            <Element name='about' />
            <About />
            <Element name='contact' />
            <Contact />
        </>
    )
}
