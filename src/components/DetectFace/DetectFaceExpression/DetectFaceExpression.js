import React, { useEffect, useState, useReducer } from 'react'
import { MyContext } from '../../../Context/Context';

import styles from './DetectFaceExpression.module.css'

const detectFaceExpressionReducer=(state, action)=>{
    switch (action.type){
        case 'success':
            return{
                loading: false,
                prediction: action.payload.prediction,
                confidence: action.payload.confidence
            }

    }
}

const initialState={
    prediction: '',
    loading: true,
    confidence: '',
}


/* eslint-disable */
const DetectFaceExpression =()=>{

    const[state, dispatch]=useReducer(detectFaceExpressionReducer,initialState);

    const{prediction, loading, confidence}=state

    // const[prediction, setPrediction]=useState(null)
    // const[loading, setLoading]=useState(true)
    // const[confidence, setConfidence]=useState(null)

    const predictionLabels=['Angry','Happy','Sad','Surprised']

    const predictFacialExpression=()=>{
        const image= document.getElementById("img")
        if(loading){
            predictModel(image);
        }
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


    const styledConfidence=()=>{
        if(confidence>85){
            return <span style={{color: 'green'}}>{confidence}%</span>
        }else if(confidence > 70 && confidence <85){
            return <span style={{color: 'orange'}}>{confidence}%</span>
        }else{
            return <span style={{color: 'red'}}>{confidence}%</span>
        }
    }


    useEffect(()=>predictFacialExpression(),[]);

    return(
        loading ? 
        
            <MyContext.Consumer>
                {context=>(
                    <div className={styles.detectFaceDiv}>
                        <React.Fragment>
                            {/*context.getCanvas*/}
                            <img id="img" style={{display: 'none'}} src={context.getCanvas} alt=""/>
                            <h1>Classifying emotion...</h1> 
                        </React.Fragment>
                    </div>
                )}
            </MyContext.Consumer>

        : 
        <MyContext.Consumer>
            {context=>(
                <React.Fragment>
                    <div className={styles.detectFaceDiv}>

                        {/*context.getCanvas */}
                        <img id="img" style={{width: '200px', height: '250px', borderRadius: '5px'}} src={context.getCanvas} alt=""/>
                        <h4>Prediction: {predictionLabels[prediction]}</h4>

                        <h4>Confidence: {styledConfidence()}</h4>
                    </div>
                </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default DetectFaceExpression