//import { useEffect, useState } from 'react';
import './App.css';
import { TeamProvider } from './components/TeamProvider';
import TeamList from './components/TeamList';
import TeamMemberForm from './components/TeamMemberForm';
const API_URI = import.meta.env.VITE_API_URI;
const API_KEY = import.meta.env.VITE_API_KEY;
console.log({ API_URI, API_KEY });

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState<any>(null); // eslint-disable-line

  // async function fetchCats() {
  //   const res = await fetch(`${API_URI}/v1/images/search?api_key=${API_KEY}`);
  //   return res.json();
  // }

  // useEffect(() => {
  //   fetchCats()
  //     .then((result) => {
  //       console.log({ result });
  //       setData(result);
  //     })
  //     .catch((error) => console.log({ error }))
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // if (isLoading) return <p>Loading...</p>;

  // if (!data) return <p>No data</p>;

  // return <div>{data && JSON.stringify(data)}</div>;
  return (
    <TeamProvider>
      <TeamList />
      <TeamMemberForm />
    </TeamProvider>
  );
};

export default App;
