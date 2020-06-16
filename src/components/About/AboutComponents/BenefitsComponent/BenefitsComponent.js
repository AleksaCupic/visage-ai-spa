import React from 'react'

import styles from './BenefitsComponent.module.css'
const BenefitsComponent =()=>{
    return(
    
        
        <div className={styles.benefitsComponent}>
            <center><h3><b>Benefits</b></h3></center>
            <br />
            <div className={`row`}>
                <div className={`col-lg-4 col-6`}>
                    <img style={{padding: '8px', heigth: '80px',width: '80px', float: 'left'}} src="https://cdn3.iconfinder.com/data/icons/customer-support-24/64/caring-attitude-service-favourite-feeling-512.png" alt=""/>
                    <span style={{textAlign: 'left'}}>
                        Our emotions influence every aspect of our lives. How we connect with each other to how we make decisions, and to our health and well-being
                    </span>
                </div>

                <div className={`col-lg-4 col-6`}>
                    <img style={{padding: '10px', heigth: '80px',width: '80px', float: 'left'}} src="https://cdn0.iconfinder.com/data/icons/business-management-2-14/256/b-80-64.png" alt=""/>
                    <span>Measuring market’s response and sentiment, and digital advertising. Enable companies to connect with their audiences.  </span>
                </div>

                <div className={`col-lg-4 col-6`}>
                    <img style={{padding: '10px', heigth: '80px',width: '80px', float: 'left'}} src="https://cdn2.iconfinder.com/data/icons/china-and-us-trade-war-4/512/SupplyChain-distribution-factory-manufacturer-production-512.png" alt=""/>
                    <span>Businesses could use emotional recognition while interviewing people to see how enthusiastic people are about the position they are applying for</span>
                </div>

                <div style={{marginTop: '40px'}} className={`col-lg-4 col-6`}>
                    <img style={{padding: '10px', heigth: '80px',width: '80px', float: 'left'}} src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519539-085_Movie-512.png" alt=""/>
                    <span>Businesses doing market research could determine how moviegoers are enjoying their movies. </span>
                </div>
            </div>
        </div>
    )
}

export default BenefitsComponent