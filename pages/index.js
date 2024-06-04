import styles from '../styles/Home.module.css';
import { JetBrains_Mono } from 'next/font/google'
import {useState} from "react";
import LinkButton from "../Components/LinkButton";
import {useRouter} from "next/router";


const majorMono = JetBrains_Mono({weight: '400', preload: false})




export default function Home() {

    return (
      <main className={`${styles.container} ${majorMono.className}`}>
          <div className={styles.name}>
              Andrew Ferruolo
          </div>
          <LinkButton text={'LinkedIn'} link={'https://linkedin.com/in/andrew-ferruolo'}/>
          <LinkButton text={'X.com'} link={'https://x.com/FerruoloA'}/>
          <LinkButton text={'GitHub'} link={'https://github.com/ferruolo'}/>
          <LinkButton text={'Contact'} link={'ContactCard'} />
      </main>
  );
}
