import React from 'react'
import PropTypes from 'prop-types'

import styles from './Backdrop.module.css'


const Backdrop =(props)=>{
    
    return(
        <div onClick={props.toggleBackdrop} className={styles.Backdrop}/>
    )
}

Backdrop.propTypes={
    toggleBackdrop: PropTypes.func
}

export default Backdrop