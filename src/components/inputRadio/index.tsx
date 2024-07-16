import { Box, FormControlLabel, Radio } from '@mui/material';
import { ReactElement } from 'react';
import './styles.css';
type RadioProps = {
  label: ReactElement | string;
  selectedValue: string;
  value: string;
  index?: number;
  isDetached?: boolean;
  maxInstallmentNumber?: number;
};

export const InputRadio = ({
  label,
  selectedValue,
  value,
  index,
  isDetached,
  maxInstallmentNumber
}: RadioProps) => {
  return (
    <Box
      sx={{
        border: `2px solid ${selectedValue === value ? '#03D69D' : '#E5E5E5'}`,
        borderBottom: selectedValue === value ? '2px solid #03D69D' : '1px solid #E5E5E5',
        backgroundColor: selectedValue === value ? '#F4FBF9' : '#FFF',
        borderRadius: isDetached
          ? '0.5rem'
          : index === 0
            ? '0.5rem 0.5rem 0 0'
            : index === maxInstallmentNumber
              ? '0 0 0.5rem 0.5rem'
              : '0',
        position: 'relative'
      }}>
      {selectedValue === value && (
        <span className="tag">{isDetached ? 'Pix' : 'Pix Parcelado'}</span>
      )}
      <FormControlLabel
        value={value.toString()}
        control={<Radio />}
        label={label}
        labelPlacement="start"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          m: 0,
          p: '1.25rem'
        }}
      />
    </Box>
  );
};
