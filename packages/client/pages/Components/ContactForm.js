import React from 'react'
import Link from 'next/link'
import styles from './contact.module.css'

const ContactForm = () => {
    return (
            <div className={styles.zenith}>
             <div className={styles.container}>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga vitae sequi fugit, beatae.</p>
                 <Link href="/">
                    <li className={styles.contact}>Go to Home</li>    
                 </Link>
             </div>
             <div className={styles.components}>
                 <div className="names">
                     <div className={styles.firstNam}>
                         <input type="text"  placeholder="First Name..." className={styles.firstName}/>
                     </div>
                        <div className={styles.lastnam}>
                         <input type="text" placeholder="Last Name..." className={styles.lastname}  />
                     </div>
                 </div>
                 <div className={styles.messag}>
                    <textarea placeholder="Enter message..." className={styles.message}></textarea>
                 </div>
                    <li className={styles.send}>Send</li>    
             </div>
        </div>
    )
}

export default ContactForm
