import styles from './Footer.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <footer className={styles.footer}>
                <ul className={styles.footer__list}>
                    <li className={styles.footer__item}>
                        <FaFacebook />
                    </li>
                    <li className={styles.footer__item}>
                        <FaInstagram />
                    </li>
                    <li className={styles.footer__item}>
                        <FaLinkedin />
                    </li>
                </ul>
                <p className={styles.footer__copy}>
                    <span>Costs</span> &copy; 2022
                </p>
        </footer>
    )
}

export default Footer