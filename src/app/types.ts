export enum GENDER_VIEW {
  GIRLS = 'girls',
  MENS = 'mens',
  COUPLES = 'couples',
  TRANS = 'trans'
}

export enum GENDER_DB {
  FEMALE = 'female',
  FEMALE_TRANNY = 'femaleTranny',
  FEMALES = 'females',
  MALE = 'male',
  MALE_FEMALE = 'maleFemale',
  MALE_TRANNY = 'maleTranny',
  MALES = 'males',
  TRANNIES = 'trannies',
  TRANNY = 'tranny'
}

export type ModelType = {
  username: string,
  modelsCountry: string,
  previewUrl: string;
  previewUrlThumbSmall: string;
  popularSnapshotUrl: string;
  snapshotUrl: string;
  id: number;
  gender: GENDER_DB;
  favoritedCount: number;
  status: string;
  viewersCount: number;
  isNew: boolean;
  avatarUrl: string;
  stream: {
    width: number;
    height: number;
    url: string;
  };
  languages: string[];
}
