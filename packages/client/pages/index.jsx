import React from "react";
import Link from 'next/link'
import Logo from '../public/images/logo.png'
import styles from  './header.module.css'

const IndexPage = () => {
    return (
        <div className="main">

        <div className={styles.container}>
                <nav className={styles.nav}>
                    <header className={styles.header}>
                        <div className={styles.logo}>
                            <img src={Logo} alt="" />
                            <h1 className={styles.h1}>Mevick</h1>
                        </div>
                        <div className={styles.navbar}>
                            <ul className={styles.list}>
                                <li className={styles.name}>Manual</li>
                                <li className={styles.name}>About</li>
                                <li className={styles.name}>Contact</li>
                                <Link href="/Components/Register">
                                <li className={styles.name1}>Register</li>    
                                </Link>
                            </ul>
                        </div>
                    </header>
                </nav>
            <div className={styles.content}>
               <h1 className={styles.h1}>Mevick Bilingual Grammar School</h1>
               <p className={styles.para}>Work-Knowledge-Progress</p>
               <Link href="/Components/Register">
                   <button className={styles.button}>Register</button>
               </Link>
            </div>
        </div>
            <div className={styles.whatWeOffer}>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>What we offer</h1>
                </div>
                <div className={styles.whatWeOfferWrapper}>
                   <div className={styles.nursery}>
                     <p className={styles.whatWeOfferWrapperTitle}>Nursery</p>
                      <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                     </p>
                  </div>
                  <div className={styles.primary}>
                      <p className={styles.whatWeOfferWrapperTitle}>Primary</p>
                      <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                     </p>
                  </div>
                  <div className={styles.secondary}>
                      <p className={styles.whatWeOfferWrapperTitle}>Secondary/Commercial</p>
                       <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                     </p>
                  </div>
                </div>
            </div>

            <div className={styles.ourCampus}>
                 <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Nursery</h1>
                </div>
                <div className={styles.ourNursery}>
                    <div className={styles.nurseryOne}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery One</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryTwo}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Two</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryThree}>
                        <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Three</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                </div>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Primary</h1>
                </div>
                <div className={styles.ourNursery}>
                    <div className={styles.nurseryOne}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery One</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryTwo}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Two</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryThree}>
                        <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Three</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                </div>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Primary</h1>
                </div>
                <div className={styles.ourNursery}>
                    <div className={styles.nurseryOne}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery One</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryTwo}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Two</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.nurseryThree}>
                        <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Nursery Three</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexPage;