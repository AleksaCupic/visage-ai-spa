import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

import isInViewport from '../../HelperFunctions/IsVisible'

import styles from './SlideInRightComponent.module.css'
const SlideInRightComponent=(props)=>{
    const[loadComponent, setLoadComponent]=useState(false)

    const slideInRightId="slideInRightComponent"+props.uniqueId

    useEffect(

        ()=>{
            const el = document.getElementById('slideInRightComponent'+props.uniqueId);

        

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
        <div id={slideInRightId} className={`${styles.SlideInRightComponent} col-12`}>
            {props.children}
        </div>
        :
        <div id={slideInRightId} className={`${styles.SlideInRightComponent1} col-12`}>
            {props.children}
        </div>
    )
}

SlideInRightComponent.propTypes={
    children: PropTypes.element.isRequired,
    uniqueId: PropTypes.number.isRequired
}

export default SlideInRightComponent