import styles from '../styles/Home.module.css';
import { Major_Mono_Display } from 'next/font/google'
import {useState} from "react";


const majorMono = Major_Mono_Display({weight: '400', preload: false})


const LinkButton = ({text, link}) => {
    const redirect = () => {
        window.location.assign(link)
    }

    return <button className={styles.linkButton} onClick={redirect}>
        {text}
    </button>
}



export default function Home() {
    const [popupText, setPopupText] = useState("")
    const [opacity, setOpacity] = useState(0);

    return (
      <main className={`${styles.container} ${majorMono.className}`}>
          <div className={styles.name}>
              Andrew Ferruolo
          </div>
          <LinkButton text={'LinkedIn'} link={'https://linkedin.com/in/andrew-ferruolo'}/>
          <LinkButton text={'X.com'} link={'https://x.com/FerruoloA'}/>
          


      </main>
  );
}
