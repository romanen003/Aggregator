import React from 'react';

import TagList from '@/app/components/Sidebar/components/TagList';
import getDicts from '@/app/api/getDicts';
import getSidebarScheme from '@/app/components/Sidebar/utils/getSidebarScheme';
import { SearchParamsType } from '@/app/types';

import styles from './styles.module.css';

type SidebarPropTypes = {
  searchParams: SearchParamsType;
};

async function Sidebar({ searchParams }: SidebarPropTypes) {
  const dicts = await getDicts();

  const data = getSidebarScheme(dicts);

  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__content}>
        <div className={styles.Sidebar__contentItem}>
          {data.map((item) => (
            <TagList
              tags={item.elements}
              title={item.title}
              key={item.title}
              searchParams={searchParams}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
