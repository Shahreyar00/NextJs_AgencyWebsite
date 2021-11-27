import styles from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carL}>
                <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
                <h1 className={styles.linkTitle}>
                    <Link href="/contact" className={styles.link} passHref>
                        <>
                            <span className={styles.linkText}>WORK WITH US</span>
                            <Image src="/img/link.png" width="40px" height="40px" alt=""/>
                        </>
                    </Link>
                </h1>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    45 HIGH STREET,
                    <br/> RANCHI  
                </div>
                <div className={styles.cardItem}>
                    CONTACT@SHAHREYAR.DEV 
                    <br/> +91 11100 10101
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    FOLLOW US:
                    <br/>
                    <Image src="/img/google.png" width="20px" height="20px" alt=""/>
                    <Image src="/img/facebook.png" width="20px" height="20px" alt=""/>
                    <Image src="/img/yahoo.png" width="20px" height="20px" alt=""/>
                </div>
                <div className={styles.cardItem}>
                    &copy; AVO INTERACTIVE 
                    <br/>
                    ALL RIGHTS RESERVED 
                </div>
            </div>
        </div>
    )
}

export default Footer

