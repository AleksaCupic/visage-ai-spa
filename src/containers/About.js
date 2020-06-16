import React from 'react'
import AboutProject from '../components/About/AboutProject'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'

const About =()=>{
    return(
        <React.Fragment>
            <Nav />
            <AboutProject/>
            <Footer/>
        </React.Fragment>
    )
}

export default About