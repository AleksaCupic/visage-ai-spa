import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import styles from './CenterHeroSection.module.css'


const CenterHeroSection=(props)=>{
    const[current,setCurrent]=useState(0)

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                setCurrent(current+1===props.image.length ? 0 : current+1)
            }, 4000)
            
            return ()=>clearTimeout(currTimeout)
        }, [props.image, current]
    )



    return(
        <div className={`${styles.centerSection} center photo col-lg-5 col-md-12`}>
            
            <img id="picture" className={styles.faceExpressionImg} src={props.image[current].img} alt=""/>
            
        </div>
    )
}

CenterHeroSection.propTypes={
    image: PropTypes.object.isRequired
}

export default CenterHeroSection