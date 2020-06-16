import React, { useEffect, useState } from 'react'
import styles from './CenterHeroSection.module.css'


const CenterHeroSection=(props)=>{
    const[currentClass, setClass]=useState(null)
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

            const styleTimeout=setTimeout(()=>setClass(styles.faceExpressionImgOut), 2000)
            setClass(styles.faceExpressionImg)
            
            return ()=>{clearTimeout(currTimeout); clearTimeout(styleTimeout)}
        }, [props.image, current]
    )



    return(
        <div className={`${styles.centerSection} center photo col-lg-5 col-md-12`}>
            
            <img id="picture" className={currentClass} src={props.image[current].img} alt=""/>
            
        </div>
    )
}

export default CenterHeroSection