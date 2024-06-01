import styles from "../styles/Home.module.css";
import {Major_Mono_Display} from "next/font/google";
import Image from "next/image";
import LinkButton from "../Components/LinkButton";

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
            phone: <a href="tel:8609994565">(860)-999-4565</a>
        </div>
        <div className={styles.contactLineItem}>
            personal email: <a href={"mailto:andrew.ferruolo@gmail.com"}>andrew.ferruolo@gmail.com</a>
        </div>
        <div className={styles.contactLineItem}>
            umich email: <br></br><a href={"mailto:ferruolo@umich.edu"}>ferruolo@umich.edu</a>
        </div>
        <button className={styles.linkButton}>
            <a href="/api/download" target="_blank">download contact</a>
        </button>



        <LinkButton text={"back"} link={'/'}/>
    </main>

}