import React from 'react';
import { useEffect } from 'react';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Header from './Header';

const Main = (props) => {

    useEffect(() => {
        document.title = "Brandon Hogan | BrandNewCode  | Full Stack Applications Developer";
    });

    return(
        <div>
            <div id='home'>
            <Header />
            </div>
            <div id='about' className=''>
                <About />
            </div>
            <div id='projects' className=''>
                <Projects />
            </div>
            <div id='contact' className=''>
                <Contact />
            </div>
        </div>
    )
}

export default Main;