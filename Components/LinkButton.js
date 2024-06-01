import {useRouter} from "next/router";
import styles from "../styles/Home.module.css";

const LinkButton = ({text, link}) => {
    const router = useRouter();

    const redirect = e => {
        e.preventDefault();
        router.push(link);
    }

    return <button className={styles.linkButton} onClick={redirect}>
        {text}
    </button>
}
export default LinkButton;