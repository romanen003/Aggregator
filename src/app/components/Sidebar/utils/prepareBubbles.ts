import splitCamelCaseToString from '@/app/components/Sidebar/utils/splitCamelCaseToString';

const TAGS_FORMATTER: {[key: string]: (tag: string) => string} = {
  profileSpecifics: (tag: string) => tag.replaceAll('specifics', '').replace('specific', ''),
  profileBodyType: (tag: string) => tag.replaceAll('bodyType', ''),
  profileEthnicity: (tag: string) => tag.replaceAll('ethnicity', ''),
  profileHairColor: (tag: string) => tag.replaceAll('hairColor', ''),
  profileEyesColor: (tag: string) => tag.replaceAll('eyeColor', ''),
  profileSubculture: (tag: string) => tag.replaceAll('subculture', ''),
};

const prepareBubbles = (
  category: string,
  tags: string[],
): {
  title: string,
  link: string,
  category: string
}[] => tags.map((tag) => {
    const formattedTitle = TAGS_FORMATTER[category] ? TAGS_FORMATTER[category](tag) : tag;

    return ({
      title: splitCamelCaseToString(formattedTitle),
      link: `/girls/tag/${tag}`,
      category,
    });
});

export default prepareBubbles;
