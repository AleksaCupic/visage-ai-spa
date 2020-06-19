import React, { useState } from 'react'
import styles from './Hero.module.css'
import LeftHeroSection from '../../components/Hero/LeftHeroSection'
import CenterHeroSection from '../../components/Hero/CenterHeroSection'
import RightHeroSection from '../../components/Hero/RightHeroSection'
import Footer from '../../components/Footer/Footer'
import DetectFace from '../../components/DetectFace/DetectFace'

const Hero =()=>{

    const[detectFace, setDetectFace]=useState(false)

    const imageData=[
        {emotion: 'Happy', img: '/images/slider1.png'}, 
        {emotion: 'Angry', img:'/images/slider2.png'},
        {emotion: 'Sad', img:'/images/slider3.png'},
        {emotion: 'Surprised', img:'/images/slider4.png'}
    ]

    const toggleDetectFace=()=>{
        //Swith for pop up window
        return setDetectFace(!detectFace)
    }



    return(
        <div className={`${styles.hero} col-12`}>
            <div className={`${styles.rowMarginTop} row col-12`}>

                {detectFace ? <DetectFace toggleDetectFace={toggleDetectFace}/> : null}

                <LeftHeroSection toggleDetectFace={toggleDetectFace}/>

                <CenterHeroSection  image={imageData}/>

               <RightHeroSection emotion={imageData}/>

            </div>

            <Footer />
            
        </div>
    )
}

export default Hero