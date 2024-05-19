import { GetDictsResponse } from '@/app/api/getDicts';
import prepareBubbles from '@/app/components/Sidebar/utils/prepareBubbles';
import splitCamelCaseToString from '@/app/components/Sidebar/utils/splitCamelCaseToString';

const getSidebarScheme = (
  {
    country,
    region,
    sortBy,
    sortOrder,
    profileInterestedIn,
    language,
    gender,
    tag,
    broadcastGender,
    ...all
  }:GetDictsResponse,
) => {
  const selectedData = Object.entries(all);

  return selectedData.map(([category, tags]) => {
    const formattedCategory = category.replaceAll('profile', '');

    return ({
      title: splitCamelCaseToString(formattedCategory),
      elements: prepareBubbles(category, tags),
    });
  });
};

export default getSidebarScheme;
