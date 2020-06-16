import React from 'react'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav =()=>{

    return(
        <React.Fragment>
            <div className={styles.navBar}>
                <NavLink to="/">
                    <img className={styles['logoImg']} src='/images/logo.gif' alt=""/>
                </NavLink>
                <span className={styles.logoText}>Visage AI</span>
                <nav>
                    <ul>
                        <li>
                            <NavLink activeClassName={styles.active} to="/" exact>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} to="/about" exact>About</NavLink>
                        </li>
                        <li>
                            <a href="https://aleksacupic.com">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className={`${styles.navBarMobile} ${styles.navBar} row`}>

                <div className="col-4">
                    <NavLink activeClassName={styles.active} to="/" exact>Home</NavLink>
                </div>
                <div className="col-4">
                    <NavLink activeClassName={styles.active} to="/About" exact>About</NavLink>
                </div>

                <div className="col-4">
                    <a href="https://aleksacupic.com" >Contact</a>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Nav