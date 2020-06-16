import React from 'react'

import styles from './ResearchProcessComponent.module.css'
import SlideInRightComponent from '../../../../HOC/Animations/SlideInRightComponent/SlideInRightComponent'

import getUniqeId from '../../../../HOC/HelperFunctions/getUniqeId'
import SlideInLeftComponent from '../../../../HOC/Animations/SlideInLeftComponent/SlideInLeftComponent'
import FadeInComponent from '../../../../HOC/Animations/FadeInComponent/FadeInComponent'
import getUniqueId from '../../../../HOC/HelperFunctions/getUniqeId'
const ReasearchProcessComponent=()=>{
    return(
        <div className={styles.reasearchProcessComponent}>
            <FadeInComponent uniqueId={getUniqeId()}>
                <center><h3>Research Process</h3></center>
            </FadeInComponent>

            <SlideInRightComponent uniqueId={getUniqeId()}>
                <br />
                <br />
                <br />
                <div className="row" style={{borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '15px'}}>
                    <div className="col-lg-4 col-12">
                        <img style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}} src="https://exporthub.co/wp-content/uploads/2018/04/Best-Content-Research-Tools-690x450.jpeg" alt=""/>
                    </div>
                    <div className="col-lg-8 col-12">
                        <h4>Started collecting images from Google, Bing</h4>
                        <p>
                            At the begining, it seemed that collecting images manually from Google & Bing
                            was a step in the right direction. We were able to collect 500 non-cropped images (125 per each expression)
                            and label them. This turned out to be a tedious and a time consuming process.
                        </p>
                    </div>
                </div>

            </SlideInRightComponent>

            <SlideInLeftComponent uniqueId={getUniqeId()}>
                <div className="row" style={{borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '15px', marginTop: '100px'}}>
                    <div className="col-lg-8 col-12">
                        <h4>Started doing tests: cropped images performed better</h4>
                        <p>
                            After training with non-cropped images our the model performet terribly.
                            We assumed that it was due to insufficient data and that photos were not cropped
                            around the face. We tested this hypothesis by cropping all 500 images and training 
                            a model with them. This model performed better but it still did not have enough data.
                            The next step was to search for databases of facial expressions. 
                        </p>
                    </div>

                    <div className="col-lg-4 col-12">
                        <img style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}} src="https://res.infoq.com/articles/continuous-testing-best-practices/en/headerimage/unlocking-continuous-testing-logo-big-1564402385131.jpg" alt=""/>
                    </div>
                </div>
            </SlideInLeftComponent>


            <SlideInRightComponent uniqueId={getUniqueId()}>
                <div className="row" style={{borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '15px', marginTop: '100px'}}>
                    <div className="col-lg-4 col-12">
                        <img style={{width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px'}} src="https://science.sciencemag.org/content/sci/358/6370/1530/F1.large.jpg?width=800&height=600&carousel=1" alt=""/>
                    </div>

                    <div className="col-lg-8 col-12">
                        <h4>Used FER and RAF dataset</h4>
                        <p>
                            After we collected datased we decided to use FER[5] and RAF[6] dataset.
                            FER was already labled for tensorflow. I wrote a Python script to label images from RAF dataset. 
                            It was straightforward process since every image had 'validation', 'training' and 'emotion' tag in the name. 
                            Those two datasets had the most images and they were the most diversed.
                        </p>
                    </div>

                </div>
            </SlideInRightComponent>

            
        </div>


    )
}

export default ReasearchProcessComponent