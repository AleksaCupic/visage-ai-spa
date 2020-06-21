import React, { useEffect, useState } from 'react'
import styles from './FadeInComponent.module.css'
import isInViewport from '../../HelperFunctions/IsVisible'

const FadeInComponent=(props)=>{

    const[loadComponent, setLoadComponent]=useState(false)

    useEffect(
        ()=>{
            const el = document.getElementById('fadeInComponent'+props.uniqueId);
            
            if (isInViewport(el) && !loadComponent) {
                setLoadComponent(true)
            } 
            
            
            const listener=()=>{
                
                if (isInViewport(el) && !loadComponent) {
                    setLoadComponent(true)
                }   
            }
            
            window.addEventListener('scroll', listener);

            return ()=>window.removeEventListener('scroll',listener)

            
        },[loadComponent, props.eventListener, props.uniqueId]
    )

    const fadeId="fadeInComponent"+props.uniqueId

    return(
        loadComponent ? 
            <div id={fadeId} className={`${styles.FadeInComponent1} col-12`}>
                {props.children}
            </div>
        : 
            <div id={fadeId} className={`${styles.FadeInComponent} col-12`}>
                {props.children}
            </div>
        
            
        
    )
}


export default FadeInComponent
