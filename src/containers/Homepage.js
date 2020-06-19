import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from './Hero/Hero'

const Homepage =()=>{
    return(
        <React.Fragment>
            <main>
                <Nav />
                <Hero />
            </main>
        </React.Fragment>
    )
}

export default Homepage