import styles from "../styles/Home.module.css";
import {Major_Mono_Display} from "next/font/google";

const majorMono = Major_Mono_Display({weight: '400', preload: false})

export default function ContactCard() {
    return <main className={`${styles.container} ${majorMono.className}`}>

    </main>

}