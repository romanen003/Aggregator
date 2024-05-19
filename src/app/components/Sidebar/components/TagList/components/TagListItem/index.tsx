import React from 'react';

import Bubble from '@/app/ui/components/Bubble';
import { SearchParamsType } from '@/app/types';

type TagListItemPropTypes = {
  link: [string, string];
  title: string;
  onClick: (category: string, tag: string) => void;
  searchParams: SearchParamsType;
};

function TagListItem({
  link,
  title,
  onClick,
  searchParams,
}: TagListItemPropTypes) {
  const handleClick = () => {
    onClick(...link);
  };

  const isSelected = Boolean(searchParams[link[0]] && searchParams[link[0]] === link[1]);

  return (
  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
    <li>
      <Bubble onClick={handleClick} isSelected={isSelected}>{title}</Bubble>
    </li>
  );
}

export default TagListItem;
