import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/cusecheg_/'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/Cusecheg'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/juan-useche-79b395235/'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>Juan Useche © 2024</p>
        </div>
    )
}
export default Footer;