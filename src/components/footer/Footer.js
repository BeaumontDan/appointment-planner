import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {

  return (
    <div className={styles.Footer}>
      <p>
        <a className={styles.footerLink} href="https://codecademy.com" title="Codecademy Homepage">Codecademy</a> project by <a className={styles.footerLink} href="https://github.com/BeaumontDan" title="GitHub Profile">Dan Beaumont</a>
        <br />
        <a className={styles.footerLink} href="https://github.com/BeaumontDan/appointment-planner" title="Code Solution">Appointment Planner React App</a> 
      </p>
    </div>
  );

};

export default Footer;
