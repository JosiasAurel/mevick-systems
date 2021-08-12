import React from "react";
import Link from 'next/link'
import styles from  '../styles/header.module.css'

// import custom components
import OfferCard from "../components/offerCard";
import SectionCard from "../components/SectionCard";

// import data
import { offersInfo, nursery, primary, secondary } from "../data";

const IndexPage = () => {
    return (
        <div className="main">

        <div className={styles.container}>
                <nav className={styles.nav}>
                    <header className={styles.header}>
                        <div className={styles.logo}>
                            <img src="/logo.png" alt="" />
                            <h1 className={styles.h1}>Mevick</h1>
                        </div>
                        <div className={styles.navbar}>
                            <ul className={styles.list}>
                                <li className={styles.name}>Manual</li>
                                <li className={styles.name}>About</li>
                                <li className={styles.name}>Contact</li>
                                <Link href="/register">
                                <li className={styles.name1}>Register</li>    
                                </Link>
                            </ul>
                        </div>
                    </header>
                </nav>
            <div className={styles.content}>
               <h1 className={styles.h1}>Mevick Bilingual Grammar School</h1>
               <p className={styles.para}>Work-Knowledge-Progress</p>
               <Link href="/register">
                   <button className={styles.button}>Register</button>
               </Link>
            </div>
        </div>
            <div className={styles.whatWeOffer}>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>What we offer</h1>
                </div>
                <div className={styles.whatWeOfferWrapper}>

                   { offersInfo.map(({title, content}) => {
                       return (
                           <OfferCard 
                            key={title}
                            title={title}
                            content={content}
                           />
                       )
                   }) }

                </div>
            </div>

            <div className={styles.ourCampus}>
                 <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Nursery</h1>
                </div>
                <div className={styles.ourNursery}>
                    { nursery.map(({title, content}) => {
                        return (
                            <SectionCard 
                            title={title}
                            content={content}
                            />
                        )
                    }) }
                </div>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Primary</h1>
                </div>
                <div className={styles.ourNursery}>
                    { nursery.map(({title, content}) => {
                        return (
                            <SectionCard 
                            title={title}
                            content={content}
                            />
                        )
                    }) }
                </div>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Campus/Secondary</h1>
                </div>
                <div className={styles.ourNursery}>
                    <div className={styles.secondaryOne}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Secondary/Commercial</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.secondaryTwo}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Secondary-second-cycle</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.secondaryThree}>
                        <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Commercial-second-Cycle</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header">
                <h1 className={styles.whatWeOfferWrapperTitle}>Our Facilities</h1>
            </div>
            <div className="facilities">
                <div className={styles.ourNursery}>
                    <div className={styles.libary}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Libary</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.sport}>
                         <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Sport field</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                    <div className={styles.food}>
                        <div className={styles.overlay}>
                          <h1 className={styles.whatWeOfferWrapperTitle}>Cantine</h1>
                          <p>Lorem, ipsum dolor sit amet consectetur 
                          adipisicing elit. Nihil ut sit eos
                          impedit est architecto temporibus 
                          eligendi, repellendus cum quod!
                         </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonials">
                  <div className={styles.whatWeOffer}>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Testimonials</h1>
                </div>
                <div className={styles.whatWeOfferWrapper}>
                   <div className={styles.nursery}>
                     <div className={styles.testi}>
                         <div className={styles.prof}></div>
                         <p>Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Nihil ut sit eos
                            impedit est architecto temporibus 
                            eligendi, repellendus cum quod!
                         </p>
                     </div>
                  </div>
                   <div className={styles.nursery}>
                     <div className={styles.testi}>
                         <div className={styles.prof}></div>
                         <p>Lorem, ipsum dolor sit amet consectetur 
                            adipisicing elit. Nihil ut sit eos
                            impedit est architecto temporibus 
                            eligendi, repellendus cum quod!
                         </p>
                     </div>
                  </div>
                   <div className={styles.nursery}>
                     <div className={styles.testi}>
                         <div className={styles.prof}></div>
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

            <footer className={styles.footer}>
                <p  className={styles.enroll}>Enroll our varius online cousrse on the genaral Education and also the commercial education</p>
                 <Link href="/contact">
                    <li className={styles.contact}>Contact Us</li>    
                 </Link>
            </footer>
        </div>
    )
}

export default IndexPage;