import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type BubbleProps = PropsWithChildren<{
  isSelected: boolean;
  onClick: () => void;
}>

function Bubble({ children, isSelected, onClick }: BubbleProps) {
  return (
    <div
      onClick={onClick}
      className={clsx(styles.Bubble, { [styles.Bubble_selected]: isSelected })}
    >
      {children}
    </div>
  );
}

export default Bubble;
