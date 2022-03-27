import { useQuery } from 'react-query';
import axios from 'axios';

const fetchLaunchInfo = async (launchId: string) => {
  const { data } = await axios.get(
    `https://api.spacexdata.com/v4/launches/${launchId}`,
  );
  console.log('WHAT WE GOT', data);

  return data;
};

const useLaunchInfo = (launchId: string) =>
  useQuery(`launch-${launchId}`, () => {
    return fetchLaunchInfo(launchId);
  });
export default useLaunchInfo;
