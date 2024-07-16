import { Box, Container, Typography } from '@mui/material';
import { Header } from '../components/layout/header';
import { data } from '../utils/payment-mock';
import { Check } from '@phosphor-icons/react';
import { formatNumberToBR } from '../utils/format/number-to-br';
import { useParams } from 'react-router-dom';

export const PaymentCompleted = () => {
  const { installmentNumber } = useParams();
  const [selectedPaymentMethod] = data.installments.filter(
    (installment) => installment.number.toString() === installmentNumber
  );

  return (
    <Container maxWidth="xs">
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}>
        <Box
          sx={{
            height: '128px',
            width: '128px',
            backgroundColor: 'primary.main',
            color: 'white',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Check size={48} weight="bold" />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h4" fontWeight="800" marginBottom="2rem">
            Pagamento completo!
          </Typography>
          <Typography variant="h5" color="primary.main" fontWeight="800">
            <Typography display="inline" color="info.100" variant="h5" fontWeight="600">
              Total:
            </Typography>{' '}
            R$ {formatNumberToBR(selectedPaymentMethod.value)}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
