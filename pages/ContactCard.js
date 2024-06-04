import styles from "../styles/Home.module.css";
import {JetBrains_Mono, Major_Mono_Display} from "next/font/google";
import Image from "next/image";
import LinkButton from "../Components/LinkButton";

const jetbrainsMono = JetBrains_Mono({weight: '400', preload: false})
const majorMono = Major_Mono_Display({weight: '400', preload: false})


export default function ContactCard() {
    return <main className={`${styles.container} ${jetbrainsMono.className}`}>
        {/*Upper Bar, Name and Headshot*/}
        <div className={styles.profilePicBox}>
            <Image src="/Headshot.jpeg"
                   alt={"Picture of me"}
                   width={100}
                   height={100}
                   className={styles.profilePicImg}
            />
        </div>
        <div className={`${styles.contactsName} ${majorMono.className}`}>
            Andrew ferruolo
        </div>
        <div className={styles.contactLineItem}>
            Phone: <a href="tel:8609994565">(860)-999-4565</a>
        </div>
        <div className={styles.contactLineItem}>
            Personal Email: <a href={"mailto:andrew.ferruolo@gmail.com"}>andrew.ferruolo@gmail.com</a>
        </div>
        <div className={styles.contactLineItem}>
            Umich Email: <br></br><a href={"mailto:ferruolo@umich.edu"}>ferruolo@umich.edu</a>
        </div>
        <button className={styles.linkButton}>
            <a href="/api/download" target="_blank">Download Card</a>
        </button>



        <LinkButton text={"Return Home"} link={'/'}/>
    </main>

}