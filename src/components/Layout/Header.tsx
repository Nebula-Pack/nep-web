import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import logo from '../../../public/brand_utils/logo.png';

const Header: React.FC = () => {
    return (
        <header className={`flex justify-between items-center p-4 ${styles.header}`}>
            <div className="flex items-center">
                <Image src={logo} alt="NebulaPack Logo" width={50} height={50} />
                <h1 className="text-xl font-bold ml-2">NebulaPack</h1>
            </div>
            <nav>
                <Link href="/public" className={`p-2 ${styles.navLink}`}>Home</Link>
            </nav>
        </header>
    );
};

export default Header;