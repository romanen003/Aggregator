import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeaderLinks from '@/app/components/Header/components/HeaderLinks';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
       <Link href="/">
         <Image src="./logo.svg" alt="logo of site" width={60} height={20} />
       </Link>
      <HeaderLinks />
    </header>
  );
}

export default Header;
