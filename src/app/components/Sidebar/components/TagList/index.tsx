import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';

import Bubble from '@/app/ui/components/Bubble';

import styles from './styles.module.css';

type TagListPropTypes = {
  title: string;
  tags: {
    title: string;
    link: string;
  }[];
};
function TagList({ title, tags }: TagListPropTypes) {
  const headersList = headers();
  const pathname = headersList.get('next-url');

  console.log('pathname', headersList.get('next-url'));

  return (
    <div className={styles.TagList}>
      <span className={styles.TagList__title}>{title}</span>
      <ul className={styles.TagList__list}>
        {tags.map((item) => (
          <li className={styles.TagList__bubbleWrapper} key={item.link}>
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
