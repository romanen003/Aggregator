import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type BubbleProps = PropsWithChildren<{isSelected: boolean}>

function Bubble({ children, isSelected }: BubbleProps) {
  return (
    <div
      className={clsx(styles.Bubble, { [styles.Bubble_selected]: isSelected })}
    >
      {children}
    </div>
  );
}

export default Bubble;
