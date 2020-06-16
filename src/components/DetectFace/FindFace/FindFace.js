import React, { useState } from 'react'
import styles from './FindFace.module.css'
import { MyContext } from '../../../Context/Context';
import Backdrop from '../../Backdrop/Backdrop';


/* eslint-disable */
const FindFace =(props)=>{


    const[loading, setLoading]=useState(true);

    const detectSingleFace =async()=>{
        

        console.log("MODELS LOADED")
        

        if(!loading) return 

        const image =document.getElementById('imageDet')

        // Get face coordinates 
        const detections=await faceapi.detectSingleFace(image)

        
        if(!detections) return props.toggleDetectFace();
        

        // If detected face change modal view
        setLoading(false)


        // Draw into canvas
        const canvas = await document.getElementById('canvas');

        //Error checking before drawing
        if(!image || !canvas){
            return 
        }


        const ctx = canvas.getContext('2d');


        ctx.drawImage(
            image,
            detections.box.x, detections.box.y,   // Start at x/y pixels from the left and the top of the image (crop),
            detections.box.width, detections.box.height,   // "Get" a (w * h) area from the source image (crop),
            0, 0,     // Place the result at 0, 0 in the canvas,
            300, 150 // With as width / height: 100 * 100 (scale)
        )

    }
    
    
    const convertCanvasToPng=(setCanvas)=>{
        
        const canvas = getCanvas();
        console.log("convertCanvasToPng: "+canvas)
        const fullQuality = canvas.toDataURL('image/png', 1);
        setCanvas(fullQuality)
    }
    
    const getCanvas=()=>{
        return document.getElementById('canvas')
    }

    

    Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_recognition_model-weights_manifest.json'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/ssd_mobilenetv1_model-weights_manifest.json')
    ]).then(detectSingleFace)

    

    return (
        <MyContext.Consumer>
            {context=>(
                <React.Fragment>
                    <Backdrop />
                    <img style={{display: 'none'}} id="imageDet" src={context.getImage} alt=""/>
                    
                    {loading ? 
                        <div className={`${styles.detectFaceDiv} ${styles.animateFace}`}>
                            
                            <h1> Looking for your face...</h1>
                            <img style={{width: '25%'}} src="/images/searchingForFace.gif" alt="searching"/>

                        </div>
                        :
                        <div className={`${styles.detectFaceDiv} ${styles.loadConfirmBox}`}>
                            <canvas className={styles.canvaImage} id="canvas"></canvas> 
                            <h3>Is this your face?</h3>
    
                            <button 
                            className={styles.confirmFace} 
                            onClick={()=>{convertCanvasToPng(context.setCanvas); props.setView(1)}}
                            >
                                Yes
                            </button>
    
                            <button 
                            onClick={props.toggleDetectFace}
                            className={styles.rejectFace}
                            >No
                            </button>
                        </div>
                    }
    
            </React.Fragment>
            )}
        </MyContext.Consumer>
    )
}

export default FindFace