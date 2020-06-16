import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop =(props)=>{
    
    return(
        <div onClick={props.toggleBackdrop} className={styles.Backdrop}/>
    )
}

export default Backdrop