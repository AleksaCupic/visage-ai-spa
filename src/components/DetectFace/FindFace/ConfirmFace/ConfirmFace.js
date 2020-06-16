import React from 'react'
import styles from '../FindFace.module.css'

const ConfirmFace=(props)=>{

    const confirmPrompt=()=>{
        props.convertCanvasToPng(); 
        props.setView(1);
    }

    const rejectPropmt=()=>{
        props.toggleDetectFace();
    }
    return(
        <div className={`${styles.detectFaceDiv} ${styles.loadConfirmBox}`}>
            <canvas className={styles.canvaImage} id="canvas"></canvas> 
            <h3>Is this your face?</h3>

            <button 
            className={styles.confirmFace} 
            onClick={confirmPrompt}
            >
                Yes
            </button>

            <button 
            onClick={rejectPropmt}
            className={styles.rejectFace}
            >No
            </button>
        </div>
    )
}

export default ConfirmFace