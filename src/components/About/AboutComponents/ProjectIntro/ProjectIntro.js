import React from 'react'

import styles from './ProjectIntro.module.css'

const ProjectIntro=()=>{
    return(
        <div className={styles.introDiv}>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="intro col-lg-6 col-12">
                    <center><h4><b>Intro</b></h4></center>
                    <p>
                        A good understanding of human emotions can have a profound 
                        impact on society and business. Our emotions influence
                        every aspect of our lives, from how we connect with each
                        other to how we make decisions, and to our health and wellbeing. 
                        <br />
                        Psychological research has classified six facial expressions which 
                        correspond to distinct universal emotions: disgust,
                        sadness, happiness, fear, anger, and surprise [1]. Recently, Martinez discovered 
                        that there are 21 distinct emotion
                        categories [2]. The research shows that happily surprised and angrily surprised 
                        are two different facial emotion expressions.
                        <br />
                        We focused our study to detect four distinctive expressions (happy, angry, sad, 
                        and surprised)
                    </p>
                </div>
                <div className="col-lg-6 col-12 motivation">
                <center><h4><b>Motivation</b></h4></center>
                <p>
                    I derive joy from curiosity and the drive to solve issues and adding some 
                    value to the world. Machine Learning is a trandy topic and I wanted to 
                    learn more about it. The goal was to create a model from scratch and share the 
                    results.
                    <br /> 
                    <br />
                    Facial emotion recogntion plays and important role in the fields of computer 
                    vision and artificial intelligence. 
                    Understanding facial emotion expressions could greatly benefit Health Care, Automotive, 
                    Video Game, Produciton, and Marketing industry.
                </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectIntro