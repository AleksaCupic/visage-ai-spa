import React from 'react'
import styles from './Loading.module.css'

const Loading=()=>{
    return(
        <div className={`${styles.detectFaceDiv}`}>
            <h1> Looking for your face...</h1>
            <img style={{width: '25%'}} src="/images/searchingForFace.gif" alt="searching"/>
        </div>
    )
}

export default Loading