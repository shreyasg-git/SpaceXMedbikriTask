import { useQuery } from 'react-query';
import axios from 'axios';

const fetchLaunchPads = async () => {
  const { data } = await axios.get('https://api.spacexdata.com/v4/launchpads');
  return data;
};

const useLaunchPads = () =>
  useQuery('launchpads', fetchLaunchPads, {
    refetchOnReconnect: false,
    retry: false,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: false,
  });
export default useLaunchPads;
