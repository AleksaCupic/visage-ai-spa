import React from 'react'
import PropTypes from 'prop-types';

const StyledConfidence=({confidence})=>{
    if(confidence>85){
        return <span style={{color: 'green'}}>{confidence}%</span>
    }else if(confidence > 70 && confidence <85){
        return <span style={{color: 'orange'}}>{confidence}%</span>
    }else{
        return <span style={{color: 'red'}}>{confidence}%</span>
    }
}

StyledConfidence.propTypes={
    confidence: PropTypes.number.isRequired
}

export default StyledConfidence