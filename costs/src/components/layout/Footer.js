import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from '../layout/Footer.module.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook></FaFacebook>
        </li>
        <li>
          <FaInstagram></FaInstagram>
        </li>
        <li>
          <FaLinkedin></FaLinkedin>
        </li>
      </ul>
      <p  className={styles.copyright}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  )
}

export default Footer
