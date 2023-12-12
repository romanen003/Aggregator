import React from 'react';

import styles from './styles.module.css';

type DescriptionPropTypes = {
  header: string;
  description?: string;
};

function Description({ header, description }: DescriptionPropTypes) {
  return (
    <div className={styles.Description}>
      <h1 className={styles.Description__header}>{header}</h1>
      {description && (<h3>{description}</h3>)}
    </div>
  );
}

export default Description;
