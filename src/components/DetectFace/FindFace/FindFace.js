import React, { useState } from 'react'
import Backdrop from '../../../UI/Backdrop/Backdrop';
import withContext from '../../../HOC/ContextWrapper/withContext'
import Loading from './Loading/Loading';
import ConfirmFace from './ConfirmFace/ConfirmFace'

/* eslint-disable */
const FindFace =(props)=>{


    const[loading, setLoading]=useState(true);

    const detectSingleFace =async()=>{
        

        console.log("MODELS LOADED")
        

        if(!loading) return 

        const image= document.createElement('img');
        image.src= props.context.getImage;

        // Get face coordinates 
        const detections=await faceapi.detectSingleFace(image);

        
        if(!detections) return props.toggleDetectFace();
        

        // If detected face change modal view
        setLoading(false);


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
        );

    }
    
    
    const convertCanvasToPng=()=>{
        
        const canvas = getCanvas();
        console.log("convertCanvasToPng: "+canvas)
        const fullQuality = canvas.toDataURL('image/png', 1);
        props.context.setCanvas(fullQuality)
    }
    
    const getCanvas=()=>{
        return document.getElementById('canvas')
    }

    

    Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/face_recognition_model-weights_manifest.json'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/ssd_mobilenetv1_model-weights_manifest.json')
    ]).then(detectSingleFace)

    

    return (
            <React.Fragment>
                <Backdrop />
                
                {loading ? 
                    <Loading />
                    :
                    <ConfirmFace 
                        convertCanvasToPng={convertCanvasToPng}
                        setView={props.setView}
                        toggleDetectFace={props.toggleDetectFace}
                    />
                }

        </React.Fragment>
           
    )
}


export default withContext(FindFace)