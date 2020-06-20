import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './RightHeroSection.module.css'

const RightHeroSection=(props)=>{
    const[current, setCurrent]=useState(0);

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                setCurrent(current+1===props.emotion.length ? 0 : current+1)
            }, 4000)
            

            return ()=>clearTimeout(currTimeout)
            
        }, [props.emotion, current]
    )
    
    return(
        <div className={`${styles.scanInfo} right aiInfo col-lg-3 col-md-12`}>
            <img style={{width: '30px'}} src="https://cdn2.iconfinder.com/data/icons/security-and-protect-glyph-color/512/security-protect-lock-shield-16-512.png" alt=""/>
            <h5><b>Emotion:</b> {props.emotion[current].emotion}</h5>
        </div>
    )
}

RightHeroSection.propTypes={
    emotion: PropTypes.object.isRequired
}

export default RightHeroSection