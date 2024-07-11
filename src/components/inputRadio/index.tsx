import { Box, FormControlLabel, Radio } from "@mui/material"
import { ReactElement } from "react";
import './styles.css'
type RadioProps = {
  label?: ReactElement | string;
  selectedValue?: string;
  value: string;
  index: number;
}

export const InputRadio = ({ label, selectedValue, value, index }: RadioProps) => {
  return (
    <Box 
      sx={{ 
        border: `2px solid ${selectedValue === value ? '#03D69D' : '#E5E5E5' }`, 
        backgroundColor: selectedValue === value ? '#F4FBF9' : '#FFF',
        borderRadius: index === 0 ? '0.5rem' : index === 1 ? '0.5rem 0.5rem 0 0' : index === 6 ? '0 0 0.5rem 0.5rem' : '0', 
        marginBottom: index == 0 ? '2rem' : 0,
        position: 'relative'  
      }}
    >
      {selectedValue === value && <span className="tag">{index === 0 ? 'Pix' : 'Pix Parcelado'}</span>}
      <FormControlLabel  
        value={value}
        control={<Radio />} 
        label={label}
        labelPlacement='start' 
        sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start' , 
          m: 0, 
          p: '1.25rem', 
        }}
      />
    </Box>
  )
}