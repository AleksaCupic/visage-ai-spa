import React, { useEffect, useState, useReducer } from 'react'
import { MyContext } from '../../../Context/Context';
import StyledConfidence from './StyledConfidence/StyledConfidence'
import styles from './DetectFaceExpression.module.css'
import withContext from '../../../HOC/ContextWrapper/withContext';

const detectFaceExpressionReducer=(state, action)=>{
    switch (action.type){
        case 'success':
            return{
                loading: false,
                prediction: action.payload.prediction,
                confidence: action.payload.confidence
            }
        default: 
            return state

    }
}

const initialState={
    prediction: '',
    loading: true,
    confidence: '',
}


/* eslint-disable */
const DetectFaceExpression =(props)=>{

    const[state, dispatch]=useReducer(detectFaceExpressionReducer,initialState);

    const{prediction, loading, confidence}=state;

    const predictionLabels=['Angry','Happy','Sad','Surprised'];



    const getImage=()=>{
        const image=document.createElement('img');
        image.src=props.context.getCanvas;
        
        return image;
    }


    const predictModel=async(image)=>{
        
        console.log("Loading model...");

        const model=await tf.loadLayersModel('/tfModel/model.json');
        
        const myTensor=augumentPhoto(image)
        
        console.log("Predicting image...");

        
        //'Angry','Happy','Sad','Surprised'
        let predictions = await model.predict(myTensor).data();
        
        console.log(predictions);

        //Get index of heighest value in predicitions (Float32Array)
        const predictedEmotion=predictions
        .reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

        dispatch(
            {type: 'success', 
            payload: {
                prediction: predictedEmotion, 
                confidence: (predictions[predictedEmotion]*100).toFixed(2)
            }
        });            
        
    }

    const augumentPhoto=(image)=>{
        
        let offset= tf.scalar(255.0);
        let myTensor=  tf.browser.fromPixels(image)
        .resizeBilinear([64, 64]) // resize image
        .toFloat() 
        .div(offset)            
        .expandDims(0); 

        return myTensor
    }



    useEffect(()=>{
        const image=getImage();

        if(loading){
            predictModel(image);
        }

    },[]);

    return(
        loading ? 
        
        <div className={styles.detectFaceDiv}>
            <React.Fragment>
                {/*context.getCanvas*/}
                
                <h1>Classifying emotion...</h1> 
            </React.Fragment>
        </div>
                

        : 
        
            
        <React.Fragment>
            <div className={styles.detectFaceDiv}>

                {/*context.getCanvas */}
                <img id="img" style={{width: '200px', height: '250px', borderRadius: '5px'}} src={props.context.getCanvas} alt=""/>
                <h4>Prediction: {predictionLabels[prediction]}</h4>

                <h4>Confidence: <StyledConfidence confidence={confidence}/></h4>
            </div>
        </React.Fragment>
         
        
    )
}


export default withContext(DetectFaceExpression);