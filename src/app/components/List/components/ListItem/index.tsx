import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ModelType } from '@/app/types';

import styles from './styles.module.css';

type ListItemPropTypes = {
  model: ModelType
};

function ListItem({
  model,
}: ListItemPropTypes) {
  return (
    <Link className={styles.ModelItem} href={`./${model.gender}/model/stripchat/${model.username}`}>
      <div className={styles.ModelItem__imgWrapper}>
         <Image
           className={styles.ModelItem__img}
           alt={`photo of ${model.username}`}
           src={model.previewUrl}
           width={300}
           height={300}
         />
      </div>
      <div className={styles.ModelItem__info}>
        <div className={styles.ModelItem__country}>
          <div className={styles.ModelItem__imgCountry}>
            {model.modelsCountry ? (
              <Image
                alt={`flag of ${model.modelsCountry}`}
                src={`https://flagsapi.com/${(model.modelsCountry || '').toUpperCase()}/flat/64.png`}
                width={64}
                height={64}
              />
            ) : null}
          </div>
        </div>
        <div className={styles.ModelItem__nickname}>
          <span className={styles.ModelItem__title}>{model.username}</span>
          <span>{model.viewersCount} viewers</span>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
