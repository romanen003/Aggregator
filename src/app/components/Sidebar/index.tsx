'use client';

import React from 'react';

import TagList from '@/app/components/Sidebar/components/TagList';
import { BOXES } from '@/app/components/Sidebar/constants';
import getDicts from '@/app/api/getDicts';
import getSidebarScheme from '@/app/components/Sidebar/utils/getSidebarScheme';

import styles from './styles.module.css';

type SidebarPropTypes = {

};

async function Sidebar(props: SidebarPropTypes) {
  const dicts = await getDicts();

  const data = getSidebarScheme(dicts);

  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__content}>
      {data.map((box) => (
        <div className={styles.Sidebar__contentItem} key={box.title}>
          {box.list.map((item) => (
            <TagList
              tags={item.elements}
              title={item.title}
              key={item.title}
            />
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
