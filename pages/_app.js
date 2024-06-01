import "../styles/reset.css"
import Head from "next/head";



const MyApp = ({ Component, pageProps }) => {
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>Andrew Ferruolo</title>
            <link rel="icon" href="/favicon.ico"/>

        </Head>
        <Component {...pageProps} />
    </>



}
export default MyApp
