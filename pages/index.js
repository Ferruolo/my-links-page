import styles from '../styles/Home.module.css';
import { Major_Mono_Display } from 'next/font/google'
import {useState} from "react";
import LinkButton from "../Components/LinkButton";
import {useRouter} from "next/router";


const majorMono = Major_Mono_Display({weight: '400', preload: false})




export default function Home() {

    return (
      <main className={`${styles.container} ${majorMono.className}`}>
          <div className={styles.name}>
              Andrew ferruolo
          </div>
          <LinkButton text={'LinkedIN'} link={'https://linkedin.com/in/andrew-ferruolo'}/>
          <LinkButton text={'X.com'} link={'https://x.com/FerruoloA'}/>
          <LinkButton text={'GitHub'} link={'https://github.com/ferruolo'}/>
          <LinkButton text={'contAct'} link={'ContactCard'} />
      </main>
  );
}
