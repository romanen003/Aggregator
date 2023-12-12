export type GetDictsResponse = {
  broadcastGender: string[];
  broadcastInteractiveToy: string[];
  gender: string[];
  language: string[];
  profileBodyType: string[];
  profileEthnicity: string[];
  profileEyesColor: string[];
  profileHairColor: string[];
  profileInterestedIn: string[];
  profileSpecifics: string[];
  profileSubculture: string[];
  tag: string[];
  country: string[];
  region: string[];
  sortBy: string[];
  sortOrder: string[];
}

const getDicts = async (): Promise<GetDictsResponse> => {
  const res = await fetch('https://go.bbrdbr.com/api/dicts');

  return res.json();
};

export default getDicts;
