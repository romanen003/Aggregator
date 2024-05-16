import React from 'react';

import getModels from '@/app/api/getModels';
import List from '@/app/components/List';
import { GENDER_VIEW } from '@/app/types';
import Sidebar from '@/app/components/Sidebar';
import Description from '@/app/components/Description';
// import Pagination from '@/app/components/Pagination';

import styles from './styles.module.css';

type TagPageProps = {
  params: {
    tag?: GENDER_VIEW,
    tags?: string
  }
};

export default async function ModelListContainer({ params: { tag, tags } }: TagPageProps) {
  const { models, total } = await getModels({ tag, tags });

  return (
    <div className={styles.ModelList}>
      <Description header={`${total} CAM MODELS ONLINE`} />
      <div className={styles.ModelList__content}>
        <main className={styles.ModelList__main}>
          <List items={models} />
          {/* <Pagination total={total} /> */}
        </main>
        <div className={styles.ModelList__sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
