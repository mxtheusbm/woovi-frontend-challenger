import { Box, Button, Divider, Typography } from "@mui/material"
import { CaretLeft, CaretUp, Check } from "@phosphor-icons/react"
import { formatNumberToBR } from "../../utils/formatNumberToBR"
import { useState } from "react";
import './styles.css'
import { useLocation } from "react-router-dom";

type DetailsProps = {
  parcelsNumber: number;
  parcelValue: number;
  totalValue: number;
}

export const Details = ({ parcelsNumber, parcelValue, totalValue }: DetailsProps) => {
  const location = useLocation()
  
  const [showMore, setShowMore] = useState(true)
  const parcels = Array.from({ length: parcelsNumber})

  const checkIfIsFinalStep = location.pathname.includes('credit-card')

  console.log(checkIfIsFinalStep)
  
  return (
  <Box sx={{ marginTop: '1rem' }}>
    {showMore && (
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography fontWeight='600' color='#B2B2B2'>Prazo de pagamento:</Typography>
          <Typography fontWeight='800'>15/12/2021 - 08:17</Typography>
        </Box>
        <Box sx={{ p: '1.25rem' }}>
          {parcels.map((_, index) => (
            <Box sx={{ textAlign: 'start' }}>
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between' 
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span 
                    className={`
                        circle ${index === 0 && 'circle-active'} 
                        ${checkIfIsFinalStep && (index === 0) && 'final-step'}
                        ${checkIfIsFinalStep && (index === 1) && 'circle-active'}
                      `
                    }
                  >
                    {checkIfIsFinalStep && <Check fontSize={8} color="#FFF" weight="bold" />}
                  </span>
                  <Typography variant="h6" fontWeight='600'>{index + 1}ª entrada no {index !== 0 ? 'Cartão' : 'Pix'}</Typography>
                </Box>              
                <Typography variant="h6" fontWeight='800'>R$ {formatNumberToBR(parcelValue)}</Typography>
              </Box>
              {index !== parcels.length - 1 && (
                <Divider 
                  orientation="vertical" 
                  sx={{ 
                    height: '40px',
                    width: '8px',
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderTop: '2px solid #E5E5E5',
            borderBottom: '2px solid #E5E5E5',
            p: '1.25rem' 
          }}
        >
          <Typography variant="body2" fontWeight='600'>CET: 0,5%</Typography>
          <Typography variant="h6" fontWeight='600'>Total: R$ {formatNumberToBR(totalValue)}</Typography>
        </Box>  
      </Box>
    )}
    <Box sx={{ borderBottom: '2px solid #E5E5E5' }}>
        <Button 
          fullWidth 
          variant="text" 
          color="info" 
          sx={{ 
            textTransform: 'none', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '1.25rem',
          }}
          onClick={() => setShowMore(!showMore)}
        >
          <Typography fontWeight='600' color='#4D4D4D'>Como funciona?</Typography>
          <Typography>{showMore ? <CaretUp size={16} weight="bold" color="#4D4D4D" /> : <CaretLeft size={16} weight="bold" color="#4D4D4D" />}</Typography>
        </Button>
    </Box>
  </Box>
 )
}