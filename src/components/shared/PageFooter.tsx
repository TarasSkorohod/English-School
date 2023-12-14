import { Box } from '@mui/material';
import * as React from 'react';

import ServerDateTime from '@/components/shared/ServerDateTime';

const PageFooter = () => {
  return (
    <section>
      <Box component='footer' sx={{ m: 5, textAlign: 'center' }}>
        PageFooter.tsx ©
      </Box>
      <Box sx={{ m: 2, textAlign: 'center', fontSize: '0.8rem' }}>
        <ServerDateTime cityTimezone='Europe/Kiev' />
      </Box>
    </section>
  );
};

export default PageFooter;
