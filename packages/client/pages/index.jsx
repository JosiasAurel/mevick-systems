import React from "react";
import Link from 'next/link'
import styles from  '../styles/header.module.css'

// import custom components
import OfferCard from "../components/offerCard";
import SectionCard from "../components/SectionCard";
import Facility from "../components/facilitiesCard";
import Testimonial from "../components/testimonial";

// import data
import { offersInfo, nursery, primary, secondary, facilities } from "../data";

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
                    { nursery.map(({title, content, style}) => {
                        return (
                            <SectionCard
                                key={style} 
                                style={style}
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
                    { primary.map(({title, content, style}) => {
                        return (
                            <SectionCard 
                                key={style}
                                style={style}
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
                    { secondary.map(({title, content, style}) => {
                        return (
                            <SectionCard 
                                key={style}
                                style={style}
                                title={title}
                                content={content}
                            />
                        )
                    }) }
                </div>
            </div>
            <div className="header">
                <h1 className={styles.whatWeOfferWrapperTitle}>Our Facilities</h1>
            </div>
            <div className="facilities">
                <div className={styles.ourNursery}>
                    { facilities.map(({title, content, facility}) => {
                       return (
                           <Facility 
                            key={facility}
                            facility={facility}
                            title={title}
                            content={content}
                           />
                       )
                   }) }

                </div>
            </div>
            <div className="testimonials">
                  <div className={styles.whatWeOffer}>
                <div className="header">
                   <h1 className={styles.whatWeOfferWrapperTitle}>Testimonials</h1>
                </div>
                <div className={styles.whatWeOfferWrapper}>
                   { [1, 2, 3].map(n => {
                       return (
                           <Testimonial key={n} />
                       )
                   }) }
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