import styles from "../styles/Contact.module.css";
import Circle from "../components/Circle";

const contact = () => {
    return (
        <div className={styles.container}>
            <Circle backgroundColor="green" left="-40vh" top="-30vh" className={styles.circle} />
            <Circle backgroundColor="yellow" left="-30vh" bottom="-55vh" className={styles.circle} />
            <h1 className={styles.title}>Get in Touch</h1>
            <form className={styles.form}>
                <input className={styles.inputS} type="text" placeholder="Name" />
                <input className={styles.inputS} type="text" placeholder="Phone" />
                <input className={styles.inputL} type="text" placeholder="Email" />
                <input className={styles.inputL} type="text" placeholder="Subject" />
                <textarea
                    className={styles.textArea}
                    type="text" 
                    rows={6}
                    placeholder="Message" 
                />
                <button className={styles.button}>SUBMIT</button>
            </form>
        </div>
    );
};

export default contact


