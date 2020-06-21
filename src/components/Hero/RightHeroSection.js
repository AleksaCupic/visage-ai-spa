import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './RightHeroSection.module.css'

const RightHeroSection=({emotions})=>{
    const[current, setCurrent]=useState(0);

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                setCurrent(current+1===emotions.length ? 0 : current+1)
            }, 4000)
            

            return ()=>clearTimeout(currTimeout)
            
        }, [emotions, current]
    )
    
    return(
        <div className={`${styles.scanInfo} right aiInfo col-lg-3 col-md-12`}>
            <img style={{width: '30px'}} src="https://cdn2.iconfinder.com/data/icons/security-and-protect-glyph-color/512/security-protect-lock-shield-16-512.png" alt=""/>
            <h5><b>Emotion:</b> {emotions[current].emotion}</h5>
        </div>
    )
}

RightHeroSection.propTypes={
    emotions: PropTypes.array.isRequired
}

export default RightHeroSection