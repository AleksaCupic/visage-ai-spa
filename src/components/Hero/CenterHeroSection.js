import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import styles from './CenterHeroSection.module.css'


const CenterHeroSection=({images})=>{
    const[current,setCurrent]=useState(0)

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                setCurrent(current+1===images.length ? 0 : current+1)
            }, 4000)
            
            return ()=>clearTimeout(currTimeout)
        }, [images, current]
    )



    return(
        <div className={`${styles.centerSection} center photo col-lg-5 col-md-12`}>
            
            <img id="picture" className={styles.faceExpressionImg} src={images[current].img} alt=""/>
            
        </div>
    )
}

CenterHeroSection.propTypes={
    images: PropTypes.array.isRequired
}

export default CenterHeroSection