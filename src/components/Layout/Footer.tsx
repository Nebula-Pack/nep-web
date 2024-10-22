import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={`p-4 text-center ${styles.footer}`}>
            <p>&copy; 2024 NebulaPack. All rights reserved.</p>
        </footer>
    );
};

export default Footer;