'use client';

import React, { useCallback } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

import TagListItem from '@/app/components/Sidebar/components/TagList/components/TagListItem';
import { SearchParamsType } from '@/app/types';

import styles from './styles.module.css';

type TagListPropTypes = {
  title: string;
  tags: {
    title: string;
    link: [string, string];
  }[];
  searchParams: SearchParamsType;
};

function TagList({ title, tags, searchParams: searchParamsProps }: TagListPropTypes) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleBubbleLick = useCallback((category: string, tag: string) => {
    router.push(`${pathname}?${createQueryString(category, tag)}`);
  }, [createQueryString, pathname, router]);

  return (
    <div className={styles.TagList}>
      <span className={styles.TagList__title}>{title}</span>
      <ul className={styles.TagList__list}>
        {tags.map((item) => (
          <TagListItem
            title={item.title}
            link={item.link}
            key={item.title}
            onClick={handleBubbleLick}
            searchParams={searchParamsProps}
          />
        ))}
      </ul>
    </div>
  );
}

export default TagList;
