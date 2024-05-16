'use client';

import React, { FC, MouseEventHandler, useCallback } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';

import s from './styles.module.css';

export type PaginationProps = {
  total: number;
  perPage?: number;
  interval?: number;
  disabled?: boolean;
};

// eslint-disable-next-line react/function-component-definition
const Pagination: FC<PaginationProps> = ({
     total = 0,
     perPage = 50,
     interval = 2,
     disabled = false,
   }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const pagesCount = Math.ceil(total / perPage);
  const minToShow = Math.min(interval * 2 + 1, pagesCount);
  const indexToStart = Math.min(
    pagesCount - minToShow,
    Math.max(page - interval - 1, 0),
  );
  const indexToFinish = Math.max(
    minToShow,
    Math.min(page + interval, pagesCount),
  );
  const buttonsCount = Math.min(indexToFinish - indexToStart, pagesCount);

  const isFirst = page === 1;
  const isLast = page === pagesCount;

  const createPageURL = useCallback((pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    params.set('page', pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  }, [pathname, searchParams]);

  const handleGoFirst: MouseEventHandler<HTMLButtonElement> = useCallback(
    () => createPageURL(1),
    [createPageURL],
  );
  const handleGoLast = useCallback(
    () => createPageURL(pagesCount),
    [createPageURL, pagesCount],
  );
  const handleGoPrev = useCallback(
    () => createPageURL(page - 1),
    [createPageURL, page],
  );
  const handleGoNext = useCallback(
    () => createPageURL(page + 1),
    [createPageURL, page],
  );

  return (
    <div className={s.root}>
      <div className={s.text}>
        <span className={s.number}>{(page - 1) * perPage + 1}</span> —{' '}
        <span className={s.number}>{Math.min(page * perPage, total)}</span> of{' '}
        <span className={s.number}>{total}</span>
      </div>
      {buttonsCount > 1 && (
        <div className={s.pages}>
          <div className={clsx(s.buttonGroups, { [s.disabled]: isFirst })}>
            {pagesCount > minToShow && (
              <div className={s.doubleArrow}>
                <button
                  type="button"
                  className={clsx(s.PaginationItem, s.PaginationItem_arrow)}
                  disabled={isFirst || disabled}
                  onClick={handleGoFirst}
                >
                  left
                </button>
              </div>
            )}
            <button
              type="button"
              className={clsx(s.PaginationItem, s.PaginationItem_arrow)}
              disabled={isFirst || disabled}
              onClick={handleGoPrev}
            >
              ArrowTipLeftXSIcon
            </button>
          </div>
          <div className={s.buttons}>
            {Array(buttonsCount)
              .fill(indexToStart)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <span className={s.button} key={index}>
                  <button
                    type="button"
                    className={clsx(s.PaginationItem, {
                      [s.PaginationItem_active]:
                      page === indexToStart + index + 1,
                    })}
                    disabled={disabled}
                    onClick={() =>
                      createPageURL(indexToStart + index + 1)}
                  >
                    <span className={s.buttonInner}>
                      {indexToStart + index + 1}
                    </span>
                  </button>
                </span>
              ))}
          </div>
          <div className={clsx(s.buttonGroups, { [s.disabled]: isLast })}>
            <button
              type="button"
              className={clsx(s.PaginationItem, s.PaginationItem_arrow)}
              disabled={isLast || disabled}
              onClick={handleGoNext}
            >
              ArrowTipRightXSIcon
            </button>
            {pagesCount > minToShow && (
              <div className={s.doubleArrow}>
                <button
                  type="button"
                  className={clsx(s.PaginationItem, s.PaginationItem_arrow)}
                  disabled={isLast || disabled}
                  onClick={handleGoLast}
                >
                  ArrowTipDoubleRightXSIcon
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
