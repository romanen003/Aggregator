import qs from 'qs';

import { GENDER_DB, ModelType, SearchParamsType } from '@/app/types';
import { MY_DOMAIN } from '@/app/constants';

type getModelsProps = {
    gender?: GENDER_DB | GENDER_DB[];
    modelsList?: string;
    limit?: number;
    tag?: string;
    tags?: string[] | string;
    searchParams: SearchParamsType;
}

export type ModelsResponse = {
    models: ModelType[];
    count: number;
    total: number;
}

const getModels = async ({
  tag,
  tags,
  modelsList,
  limit = 50,
  searchParams,
}:getModelsProps): Promise<ModelsResponse> => {
  const queryParams = qs.stringify({
    modelsList,
    ...(modelsList ? { limit: 1 } : { limit }),
    tag,
    tags,
    ...searchParams,
  }, {
    arrayFormat: 'comma',
    encodeValuesOnly: true,
    skipNulls: true,
  });

  const response = await fetch(`${MY_DOMAIN}/api/models?${queryParams}`);

  const body = await response.json();

  return body;
};

export default getModels;
