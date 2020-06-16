import React, { useEffect, useState } from 'react'
import { MyContext } from '../../../Context/Context';

import styles from './DetectFaceExpression.module.css'

/* eslint-disable */
const DetectFaceExpression =()=>{

    const[prediction, setPrediction]=useState(null)
    const[loading, setLoading]=useState(true)
    const[confidence, setConfidence]=useState(null)

    const predictionLabels=['Angry','Happy','Sad','Surprised']

    const predictFacialExpression=()=>{
        const image=document.getElementById("img")
        predictModel(image);
    }


    const predictModel=async(image)=>{
        if(loading){
            console.log("Loading model...")
            let model=await tf.loadLayersModel('/tfModel/model.json');
            let offset= tf.scalar(255.0);
            let myTensor= tf.browser.fromPixels(image)
            .resizeBilinear([64, 64]) // change the image size
            .toFloat() 
            .div(offset)            
            .expandDims(0);    
            
            console.log("Predicting image...")

            //    0      1      2       3
            //'Angry','Happy','Sad','Surprised'
            let predictions = await model.predict(myTensor).data();
            
            console.log(predictions);

            //Get index of heighest value in predicitions (Float32Array)
            const predictedEmotion=predictions.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

            setLoading(false);
            setPrediction(predictedEmotion);
            setConfidence((predictions[predictedEmotion]*100).toFixed(2));            
        }
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