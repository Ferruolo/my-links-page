import styles from "../styles/Home.module.css";
import {Major_Mono_Display} from "next/font/google";
import Image from "next/image";


const majorMono = Major_Mono_Display({weight: '400', preload: false})

export default function ContactCard() {
    return <main className={`${styles.container} ${majorMono.className}`}>
        {/*Upper Bar, Name and Headshot*/}
        <div className={styles.profilePicBox}>
            <Image src="/Headshot.jpeg"
                   alt={"Picture of me"}
                   width={100}
                   height={100}
                   className={styles.profilePicImg}
            />
        </div>
        <div className={styles.contactsName}>
            Andrew Ferruolo
        </div>
        <div className={styles.contactLineItem}>
            phone: (860)-999-4565
        </div>
        <div className={styles.contactLineItem}>
            personal email: andrew.ferruolo@gmail.com
        </div>
        <div className={styles.contactLineItem}>
            umich email: <br></br>ferruolo@umich.edu
        </div>
    </main>

}