import { ReactElement } from 'react';

import './styles.css';
import { Box } from '@mui/material';

type BannerProps = {
  children: ReactElement | string;
};

export const Banner = ({ children }: BannerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.main',
        padding: '0.25rem',
        width: '300px',
        fontSize: '12px',
        position: 'relative',
        borderRadius: '0.5rem 0 0 0.5rem',
        marginTop: '0.5rem'
      }}>
      {children}
    </Box>
  );
};
