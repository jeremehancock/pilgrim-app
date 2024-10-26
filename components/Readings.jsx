'use client';

import { useEffect, useState } from 'react';
import { fetchReadings } from '@/lib/fetchReadings';

const Readings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchReadings()
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching Readings data:", error));
    }
  }, []);
  

  return (
    <div>
      <h1>Today's Readings</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Readings;