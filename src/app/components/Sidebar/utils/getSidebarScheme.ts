import { GetDictsResponse } from '@/app/api/getDicts';

function splitCamelCaseToString(s: string) {
  return s.split(/(?=[A-Z])/).join(' ').toUpperCase();
}
const getSidebarScheme = (
  {
 country, region, sortBy, sortOrder, profileInterestedIn, gender, tag, ...all
}:GetDictsResponse,
) => {
  const selectedData = Object.entries(all);

  return [{
    title: '',
    list: selectedData.map((category) => ({
      title: splitCamelCaseToString(category[0].replaceAll('profile', '')),
      elements: category[1].map((item) => ({ title: item, link: `/${item}` })),
    })),
}];
};

export default getSidebarScheme;
