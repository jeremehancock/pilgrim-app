'use client';

import { useEffect, useState } from 'react';
import { fetchReadings } from '@/lib/fetchReadings';
import { Stack, Typography } from '@mui/material';

const Readings = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchReadings()
        .then((json) => setData(json))
        .catch((error) => console.error("Error fetching Readings data:", error));
    }
  }, []);

  const formatText = (string) => {
    string = string.replace(/&#160;/g, '');
    return (
      <span dangerouslySetInnerHTML={{ __html: string }} />
    );
  };

  const removeIndent = (string) => {
    return string.replace(
      /(style="[^"]*)\btext-indent\s*:\s*[^;]+;?\s*/gi,
      '$1'
    ).replace(/style="\s*"/gi, 'style=""').replace(/\s*style=""/gi, '').replace(
      /(style="[^"]*)\bmargin-left\s*:\s*[^;]+;?\s*/gi,
      '$1'
    ).replace(/style="\s*"/gi, 'style=""').replace(/\s*style=""/gi, '')
  };
  
  return (
    <Stack>
      <Typography sx={{ typography: { xs: 'h3', md: 'h1' }, mb: 5 }}>{data ? formatText(data.date) : ''}</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h2' }, mb: 5 }}>Today's Feast: {data ? formatText(data.day) : ''}</Typography>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>First Reading</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>{data ? formatText(data.Mass_R1.source) : ''}</Typography>
      <Typography sx={{ mb: 5 }}>{data ? formatText(data.Mass_R1.text) : ''}</Typography>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>Today's Psalm</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>{data ? formatText(data.Mass_Ps.source) : ''}</Typography>
      <Typography sx={{ mb: 5 }}>{data ? formatText(removeIndent(data.Mass_Ps.text)) : ''}</Typography>
      {data?.Mass_R2 && (<Box><Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>Second Reading</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>{data ? formatText(data.Mass_R2.source) : ''}</Typography>
      <Typography sx={{ mb: 3 }}>{data ? formatText(data.Mass_R2.text) : ''}</Typography></Box>)}
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>Today's Gospel Acclamation</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>{data ? formatText(data.Mass_GA.source) : ''}</Typography>
      <Typography sx={{ mb: 5 }}>{data ? formatText(removeIndent(data.Mass_GA.text)) : ''}</Typography>
      <Typography sx={{ typography: { xs: 'h3', md: 'h2' }, mb: 5 }}>Today's Gospel</Typography>
      <Typography sx={{ typography: { xs: 'h4', md: 'h3' }, mb: 3 }}>{data ? formatText(data.Mass_G.source) : ''}</Typography>
      <Typography sx={{ mb: 3  }}>{data ? formatText(data.Mass_G.text) : ''}</Typography>
      <Typography variant='body2'>{data ? formatText(data.copyright.text) : ''}</Typography>
    </Stack>
  );
};

export default Readings;