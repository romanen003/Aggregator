import { GENDER_VIEW } from '@/app/types';

// eslint-disable-next-line import/prefer-default-export
export const BOXES = [{
  title: '',
  list: [{
    title: 'Gender',
    elements: Object.entries(GENDER_VIEW).map((item) => ({ title: item[1], link: `/${item[1]}` })),
  }],
}];
