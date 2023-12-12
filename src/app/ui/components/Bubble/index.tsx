import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

function Bubble({ children, isSelected }: PropsWithChildren<{isSelected: boolean}>) {
  return (
    <div
      className={clsx(styles.Bubble, { [styles.Bubble_selected]: isSelected })}
    >
      {children}
    </div>
  );
}

export default Bubble;
