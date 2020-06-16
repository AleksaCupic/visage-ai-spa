import React, { useEffect, useState } from 'react'
import styles from './RightHeroSection.module.css'

const RightHeroSection=(props)=>{
    const[style, setStyle]=useState(null)
    const[current, setCurrent]=useState(0);

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                if(current+1<props.emotion.length){
                    setCurrent(current+1)
                }
                if(current+1===props.emotion.length){
                    setCurrent(0)
                }
            }, 4000)

            const styleTimeout=setTimeout(()=>setStyle(styles.scanInfoFadeOut), 2000)
            setStyle(styles.scanInfo)

            return ()=>{clearTimeout(currTimeout); clearTimeout(styleTimeout)}
            
        }, [props.emotion, current]
    )
    
    return(
        <div className={`${style} right aiInfo col-lg-3 col-md-12`}>
            <img style={{width: '30px'}} src="https://cdn2.iconfinder.com/data/icons/security-and-protect-glyph-color/512/security-protect-lock-shield-16-512.png" alt=""/>
            <h5><b>Emotion:</b> {props.emotion[current].emotion}</h5>
        </div>
    )
}

export default RightHeroSection