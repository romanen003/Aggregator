import React, { ReactNode } from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase,import/order
import { Source_Sans_3 } from 'next/font/google';

import './styles/globals.css';
import clsx from 'clsx';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

import styles from './styles.module.css';

const inter = Source_Sans_3({ subsets: ['latin'] });

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
    <body className={inter.className}>
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
