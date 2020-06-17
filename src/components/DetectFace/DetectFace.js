import React, { useState } from 'react'
import PropTypes from 'prop-types'
import FindFace from './FindFace/FindFace';
import DetectFaceExpression from './DetectFaceExpression/DetectFaceExpression';
import Backdrop from '../../UI/Backdrop/Backdrop'

const DetectFace =(props)=>{
    const[view, setView]=useState(0)


    const switchView=()=>{
        if(view===0){
            return  <FindFace setView={setView} toggleDetectFace={props.toggleDetectFace}/>                    
        }
        else if(view===1){
            return <React.Fragment>
                        <Backdrop toggleBackdrop={props.toggleDetectFace}/>
                        <DetectFaceExpression setView={setView}/>
                    </React.Fragment>
            
            
        }
        else{
            throw new Error("View not found :( ");
        }
    }


    
    return switchView()
        
}

DetectFace.propTypes={
    toggleDetectFace: PropTypes.func
}




export default DetectFace