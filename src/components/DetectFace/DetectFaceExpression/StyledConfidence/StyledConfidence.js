import React from 'react'

const StyledConfidence=({confidence})=>{
    if(confidence>85){
        return <span style={{color: 'green'}}>{confidence}%</span>
    }else if(confidence > 70 && confidence <85){
        return <span style={{color: 'orange'}}>{confidence}%</span>
    }else{
        return <span style={{color: 'red'}}>{confidence}%</span>
    }
}

export default StyledConfidence