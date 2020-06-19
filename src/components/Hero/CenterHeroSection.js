import React, { useEffect, useState } from 'react'
import styles from './CenterHeroSection.module.css'


const CenterHeroSection=(props)=>{
    const[current,setCurrent]=useState(0)

    useEffect(
        ()=>{
            const currTimeout=setTimeout(()=>{
                if(current+1<props.image.length){
                    setCurrent(current+1)
                }
                if(current+1===props.image.length){
                    setCurrent(0)
                }
            }, 4000)
            
            return ()=>{clearTimeout(currTimeout)}
        }, [props.image, current]
    )



    return(
        <div className={`${styles.centerSection} center photo col-lg-5 col-md-12`}>
            
            <img id="picture" className={styles.faceExpressionImg} src={props.image[current].img} alt=""/>
            
        </div>
    )
}

export default CenterHeroSection