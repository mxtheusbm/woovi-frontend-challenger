import { Box, IconButton, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { formatNumberToBR } from '../../utils/format/number-to-br';
import { KeyboardArrowLeft, KeyboardArrowUp } from '@mui/icons-material';
import { useState } from 'react';
import { formatDate } from '../../utils/format/date-to-br';

type DetailsProps = {
  installmentNumber: number;
  installmentValue: number;
  totalValue: number;
  expiresDate: string;
  step: number;
};

export const Details = ({
  installmentNumber,
  installmentValue,
  totalValue,
  expiresDate,
  step
}: DetailsProps) => {
  const [howItWorkIsOpen, setHowItWorkIsOpen] = useState(false);

  const steps = Array.from({ length: installmentNumber });

  return (
    <Box sx={{ marginTop: '1rem' }}>
      <Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography fontWeight="600" color="info.100">
            Prazo de pagamento:
          </Typography>
          <Typography fontWeight="800">{formatDate(expiresDate)}</Typography>
        </Box>
        <Box sx={{ py: '1.25rem', borderBottom: '2px solid #E5E5E5' }}>
          <Stepper
            activeStep={step}
            orientation="vertical"
            sx={{
              '& .MuiStepIcon-text': {
                display: 'none'
              }
            }}>
            {steps.map((_, index) => (
              <Step key={index}>
                <StepLabel>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {steps.length !== 1 ? (
                      <Typography variant="h6" fontWeight="600">
                        {index + 1}ª entrada no {index !== 0 ? 'Cartão' : 'Pix'}
                      </Typography>
                    ) : (
                      <Typography variant="h6" fontWeight="600">
                        Pagamento total via Pix
                      </Typography>
                    )}

                    <Typography variant="h6" fontWeight="800">
                      R$ {formatNumberToBR(installmentValue)}
                    </Typography>
                  </Box>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #E5E5E5',
            py: '1.25rem'
          }}>
          <Typography variant="body2" fontWeight="600">
            CET: 0,5%
          </Typography>
          <Typography variant="h6" fontWeight="600">
            Total: R$ {formatNumberToBR(totalValue)}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ borderBottom: '2px solid #E5E5E5', py: '1.25rem' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.5rem'
          }}>
          <Typography fontWeight="600">Como funciona?</Typography>

          <IconButton size="small" onClick={() => setHowItWorkIsOpen(!howItWorkIsOpen)}>
            {howItWorkIsOpen ? <KeyboardArrowLeft /> : <KeyboardArrowUp />}
          </IconButton>
        </Box>

        {howItWorkIsOpen && (
          <Typography textAlign="left">
            O Woovi Parcelado é um método de pagamento inovador que permite a seus clientes pagar a
            parcela de entrada pelo Pix e dividir o restante da compra no cartão. O processo é
            totalmente online, rápido e fácil, com um sistema antifraude nativo para segurança
            total.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
