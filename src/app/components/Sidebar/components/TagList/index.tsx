'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Bubble from '@/app/ui/components/Bubble';

import styles from './styles.module.css';

type TagListPropTypes = {
  title: string;
  tags: {
    title: string;
    link: string
  }[];
};

function TagList({ title, tags }: TagListPropTypes) {
  const pathname = usePathname();

  return (
    <div className={styles.TagList}>
      <span className={styles.TagList__title}>{title}</span>
      <ul className={styles.TagList__list}>
        {tags.map((item) => (
          <li className={styles.TagList__bubbleWrapper} key={item.title}>
            <Link href={item.link}>
              <Bubble isSelected={pathname === item.link}>{item.title}</Bubble>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagList;
