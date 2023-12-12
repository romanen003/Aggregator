'use client';

import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

import { GENDER_VIEW } from '@/app/types';

import styles from './styles.module.css';

const GROUPS = Object.values(GENDER_VIEW);

function HeaderLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles.Nav}>
      {GROUPS.map((group) => (
        <Link
          className={clsx(
            styles.Nav__item,
            { [styles.Nav__item_active]: pathname === `/${group}` },
          )}
          href={`/${group}`}
          key={group}
        >
          {group.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}

export default HeaderLinks;
