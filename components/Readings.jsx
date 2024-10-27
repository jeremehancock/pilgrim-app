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

  const stripHtml = (html) => {

    return html
    .replace(/<[^>]+>/g, '')
    .replace(/&#x2010;/g, '-')
    .replace(/&#160;/g, ' ')
    .replace(/&#x2019;/g, '\'')
    .replace(/&#x2018;/g, ' \'')
  };
  

  return (
    <div>
      <h2>{data ? JSON.stringify(stripHtml(data.date), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.day), null, 2) : 'Loading...'}</h2>
      <h2>First Reading</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R1.heading), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R1.source), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R1.text), null, 2) : 'Loading...'}</h2>
      <h2>Psalm</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_Ps.source), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_Ps.text), null, 2) : 'Loading...'}</h2>
      {data?.Mass_R2 && (<div><h2>Second Reading</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R2.heading), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R2.source), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_R2.text), null, 2) : 'Loading...'}</h2></div>)}
      <h2>Gospel Accamation</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_GA.source), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_GA.text), null, 2) : 'Loading...'}</h2>
      <h2>Gospel</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_G.heading), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_G.source), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.Mass_G.text), null, 2) : 'Loading...'}</h2>
      <h2>{data ? JSON.stringify(stripHtml(data.copyright.text), null, 2) : 'Loading...'}</h2>
      {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
    </div>
  );
};

export default Readings;