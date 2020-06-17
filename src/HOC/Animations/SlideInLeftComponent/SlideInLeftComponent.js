import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import isInViewport from '../../HelperFunctions/IsVisible'
import styles from './SlideInLeftComponent.module.css'

const SlideInLeftComponent=(props)=>{
    const[loadComponent, setLoadComponent]=useState(false)

    const slideInLeftId='slideInLeftComponent'+props.uniqueId

    useEffect(

        ()=>{
            var el = document.getElementById('slideInLeftComponent'+props.uniqueId);

        

            const listener=()=>{
                
                if (isInViewport(el) && !loadComponent) {
                    setLoadComponent(true)
                }   
            }
            
            window.addEventListener('scroll', listener, false);

            //return(window.removeEventListener('scroll', listener, true))
        },[loadComponent, props.uniqueId]
    )



    return(
        loadComponent ? 
        <div id={slideInLeftId} className={`${styles.SlideInLeftComponent} col-12`}>
            {props.children}
        </div>
        :
        <div id={slideInLeftId} className={`${styles.SlideInLeftComponent1} col-12`}>
            {props.children}
        </div>
    )
}

SlideInLeftComponent.propTypes={
    children: PropTypes.object.isRequired,
    uniqueId: PropTypes.string.isRequired
}

export default SlideInLeftComponent