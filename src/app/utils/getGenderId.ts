import { GENDER_DB, GENDER_VIEW } from '@/app/types';

const getGenderId = (gender?: GENDER_VIEW): GENDER_DB[] => {
  if (!gender) {
    return [];
  }

  switch (gender) {
  case GENDER_VIEW.COUPLES:
    return [GENDER_DB.MALE_FEMALE];
  case GENDER_VIEW.GIRLS:
    return [GENDER_DB.FEMALE, GENDER_DB.FEMALES];
  case GENDER_VIEW.MENS:
    return [GENDER_DB.MALE, GENDER_DB.MALES];
  case GENDER_VIEW.TRANS:
    return [GENDER_DB.FEMALE_TRANNY, GENDER_DB.MALE_TRANNY, GENDER_DB.TRANNIES, GENDER_DB.TRANNY];
  default:
    return [GENDER_DB.MALE_FEMALE];
  }
};

export default getGenderId;
