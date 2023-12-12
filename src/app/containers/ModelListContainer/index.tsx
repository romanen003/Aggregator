import React from 'react';

import getModels from '@/app/api/getModels';
import List from '@/app/components/List';
import { GENDER_VIEW } from '@/app/types';
import getGenderId from '@/app/utils/getGenderId';
import Sidebar from '@/app/components/Sidebar';
import Description from '@/app/components/Description';

import styles from './styles.module.css';

type TagPageProps = {
  params: {
    tag?: GENDER_VIEW,
    tags?: string
  }
};

export default async function ModelListContainer({ params: { tag, tags } }: TagPageProps) {
  const gender = getGenderId(tag);
  const { models, total } = await getModels({ gender });

  return (
    <div className={styles.ModelList}>
      <Description header={`${total} CAM MODELS ONLINE`} />
      <div className={styles.ModelList__content}>
        <main className={styles.Layout__main}>
          <List items={models} />
        </main>
        <div className={styles.Layout__sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
