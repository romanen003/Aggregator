import qs from 'qs';

import { GENDER_DB, ModelType } from '@/app/types';
import { MY_DOMAIN } from '@/app/constants';

type getModelsProps = {
    gender?: GENDER_DB | GENDER_DB[];
    modelsList?: string;
    limit?: number
}

export type ModelsResponse = {
    models: ModelType[];
    count: number;
    total: number;
}

const getModels = async ({
    gender,
    modelsList,
    limit = 50,
}:getModelsProps = {}): Promise<ModelsResponse> => {
    const queryParams = qs.stringify({
        gender,
          modelsList,
        ...(modelsList ? { limit: 1 } : { limit }),
    }, {
        arrayFormat: 'comma',
        encodeValuesOnly: true,
        skipNulls: true,
    });

    const response = await fetch(`${MY_DOMAIN}/api/models?${queryParams}`, { cache: 'no-cache' });

    const body = await response.json();

    return body;
};

export default getModels;
