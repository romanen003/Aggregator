import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
import clsx from 'clsx';

import './styles/globals.css';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: 'Enjoy with webcam',
  description: 'Watch any cam models for free',
};

type RootLayoutPropTypes = {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutPropTypes) {
  return (
    <html lang="en">
    <body>
    <div className={styles.Layout}>
      <div className={styles.Layout__header}>
        <div className={styles.Layout__center}>
          <Header />
        </div>
      </div>
      <div className={clsx(styles.Layout__center, styles.Layout__main)}>
        {children}
      </div>
      <div className={styles.Layout__footer}>
        <div className={styles.Layout__center}>
          <Footer />
        </div>
      </div>
    </div>
    </body>
    </html>
  );
}
