import React from 'react';
import '../styles/Footer.css';

const styles = {
  footerStyle: {
    background: '#003840',
  },
footingStyle: {
    fontSize: '20px',
  },
};



function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <h1 style={styles.footingStyle}>Drink and Play Responsively<br></br> ©ScenAntics</h1>
    
    </footer>
  );
}

export default Footer;