import React from 'react'

import styles from './ModelComponent.module.css'

const ModelComponent=()=>{
    return(
        <div className={styles.modelComponent}>

            <center><h3>Model</h3></center>

            <p style={{padding: '30px'}}>
                In order to develop a classifier, we use TensorFlow framework [3] on Google Cloud Platform with the grant from Google
                Research Credits program. <br /><br />
                Our model is a CNN[4] with 3 layers, where each layer consist of Convolution (<i>Conv2D</i>), average pooling
                (<i>AveragePooling</i>), and <i>Dropout</i> layers with 0.2 dropout rate. In the first layer we have 2 Convolutions with 64
                filters, in the second layer we have two Convolutions with 128 filter, and in the third layer we have one Convlution with
                128. Kernel size is 3x3 in Convolution layers and 2x2 in Average Pooling layers. Also, we had 2 additional layers: Flatten
                layer to flatten our images into a single dimensional data, and Dropout. After Flatten we have dropout of 0.5, and after the
                first Dense layer we have another <i>Dropout</i> with 0.2 dropout rate to prevent overfitting. ReLU is used as the activation
                functions in those layers. The model has a Dense layer consisting of 512 neurons, and an output layer with ‘softmax’
                activation function for multi-class classification as shown below.
            </p>
        
            <center><img className={styles.modelComponentImg} src="images/Tf Diagram.png" alt="" /></center>
        </div>
    )
}

export default ModelComponent