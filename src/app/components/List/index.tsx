import React from 'react';

import ListItem from '@/app/components/List/components/ListItem';
import { ModelType } from '@/app/types';

import styles from './styles.module.css';

type ListPropTypes = {
  items: ModelType[]
};

function List({ items }: ListPropTypes) {
  return (
    <ul className={styles.List}>
      {items.map((model) => (
        <li className={styles.List__item} key={model.id}>
          <ListItem model={model} />
        </li>
      ))}
    </ul>
  );
}

export default List;
