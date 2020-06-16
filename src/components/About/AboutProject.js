import React from 'react'
import styles from './AboutProject.module.css'
import FadeInComponent from '../../HOC/Animations/FadeInComponent/FadeInComponent'

import SlideInRightComponent from '../../HOC/Animations/SlideInRightComponent/SlideInRightComponent'

import getUniqueId from '../../HOC/HelperFunctions/getUniqeId'

import ProjectIntro from './AboutComponents/ProjectIntro/ProjectIntro'
import BenefitsComponent from './AboutComponents/BenefitsComponent/BenefitsComponent'
import ReasearchProcessComponent from './AboutComponents/ResearchProcessComponent/ResearchProcessComponent'
import ModelComponent from './AboutComponents/ModelComponent/ModelComponent'

const AboutProject=()=>{
    return(
        <div className={`${styles.aboutProject} col-12`}>
            <article>
                <h1 className={styles.aboutProjectH1}>About This Project</h1>


                <FadeInComponent uniqueId={getUniqueId()}>
                    <ProjectIntro />
                </FadeInComponent>

                <SlideInRightComponent uniqueId={getUniqueId()}>
                    <BenefitsComponent />
                </SlideInRightComponent>
                
                

                <ReasearchProcessComponent />

                <FadeInComponent uniqueId={getUniqueId()}>
                    <ModelComponent />
                </FadeInComponent>


                <FadeInComponent uniqueId={getUniqueId()}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <center><h3>Results</h3></center>
                    <br />
                    <p style={{padding: '30px'}}>
                        We eventually used the image dataset with FER dataset from Kaggle [5], and RAF dataset [6]. We decided to use those
                        datasets because they had many images and they were already annotated. We decided not to use the images we collected at
                        the beginning of our research because the amount was insufficient. However, it taught us that cropping faces would
                        improve accuracy significantly. Figure 2 shows a few images from the test set and how cropping impacts accuracy.
                        <br />
                        FER and RAF datasets come with more than 4 emotions that we’d like to classify. We chose 19,146 training images and
                        2,052 validation images from FER dataset. All the images from FER database are grayscale and cropped. The problem with
                        FER was that a number of pictures are mislabeled and have watermarks. On the original dataset we were able to achieve 
                        79.19% validation accuracy. After going over every image to re-label manually, we were able to achieve a slightly higher
                        validation accuracy of 81.7%.
                        <br />
                        <br />
                        RAF performed beeter with 90.7% accuracy. This is misleading since RAF had uneven distribution
                        of images per each facial emotion expression. For happy facial expressions accuracy was over 90% and for
                        Sad and Angry it was less that 50%.  
                    </p>
                    <div className="row">
                        <div style={{textAlign: 'center'}} className="col-6">
                            <img style={{width: '100%'}} src="/images/RAF.png" alt=""/>
                        </div>
                        <div className="col-6">
                            <img style={{width: '100%'}} src="/images/FER.png" alt=""/>
                        </div>
                        
                        <div className="col-12">
                            <br />
                            <br />
                            <center><img style={{width: '50%'}} src="/images/ValAcc.png" alt=""/></center>
                        </div>
                    </div>

                    <br />
                    <br />
                    <b>Authors:</b> Aleksa Cupic and Gilliean Lee – Lander University
                    <br />
                    <br />
                    <i><b>References</b></i><br />
[1] Black, M. J., Yacoob, Y. (1995). Recognizing Facial Expressions in Image Sequences Using Local Parameterized
Models of Image Motion. International Journal of Computer Vision. 25(1):23-48. DOI: 10.1023/A:1007977618277<br />
[2] Martinez, Aleix M. (2014/04/15). Compound facial expressions of emotion. , 111, E1454-. <br />

[3] TensorFlow. (n.d.). Retrieved from https://www.tensorflow.org/<br />
[4] Saha, S. (2018, December 17). A Comprehensive Guide to Convolutional Neural Networks - the ELI5 way. Retrieved
from https://towardsdatascience.com/a-comprehensive-guide-to-convolutional-neural-networks-the-eli5-way3bd2b1164a53<br />
[5] Challenges in Representation Learning: Facial Expression Recognition Challenge. (n.d.). Retrieved from
https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/overview.<br />
[6] Li, S., Deng, W., Du, J.: Reliable crowdsourcing and deep locality-preserving learning for expression recognition in the
wild. In: CVPR. pp. 2584–2593 (2017)
                    <br />
                    <br />
                    <br />
                    <br />
                </FadeInComponent>
                
            </article>
        </div>
    )

}

export default AboutProject