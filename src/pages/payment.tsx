import { Box, Button, Container, FormControl, RadioGroup, Typography, Stack } from '@mui/material';
import { Header } from '../components/layout/header';
import { ChangeEvent, useEffect, useState } from 'react';
import { Charge, data } from '../utils/payment-mock';
import { Footer } from '../components/layout/footer';
import { NavLink } from 'react-router-dom';
import { InputRadio } from '../components/inputRadio';
import { formatNumberToBR } from '../utils/format-number-to-br';
import { Banner } from '../components/banner';

export const Payment = () => {
  const [charge, setCharge] = useState<Charge>()
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod((event.target as HTMLInputElement).value);
  };

  useEffect(() => {
    // request
    setCharge(data)
  }, [])

  console.log(charge)
  
  return (
    <Container maxWidth="xs">
      <Header title={`${charge?.customer.name}, como você quer pagar?`}/>

      <FormControl fullWidth>
        <RadioGroup
          name="select-payment-method"
          value={selectedPaymentMethod}
          onChange={handleChange}
        >
          <InputRadio
            selectedValue={selectedPaymentMethod}
            value={'1'}
            isDetached 
            label={
              <Box>
                <Typography variant='h5' fontWeight='600'>
                  <Typography display='inline' variant='h5' fontWeight='800'>1x</Typography> R$ {formatNumberToBR(data.value)}
                </Typography>

                <Typography color='primary' fontWeight='600'>Ganhe <Typography color='primary' display='inline' fontWeight='800'>3%</Typography> de Cashback</Typography>

                <Banner>
                  <Box>
                    <Typography color='#FFFFFF' variant='body2' fontWeight='600'>
                      🤑 <Typography display='inline' color='#FFFFFF' variant='body2' fontWeight='800'>R$ 300,00</Typography> de volta no seu Pix na hora
                    </Typography>
                    <div className={`ribbon ${selectedPaymentMethod == data.value.toString() ? 'ribbon-active' : ''}` }></div>
                  </Box>
                </Banner>
              </Box>
            } 
          />

          <Stack 
            sx={{ 
              marginTop: '2rem' 
            }}
          >
            {data.installments.filter(installment => installment.number !== 1).map((installment, index) => (
              <InputRadio 
                key={installment.number}
                label={
                  <div style={{ width: '100%' }}>
                    <Typography variant='h5' fontWeight='600'>
                      <Typography display='inline' variant='h5' fontWeight='800'>{installment.number}x</Typography> R$ {formatNumberToBR(installment.value / installment.number)}
                    </Typography>
                    <Typography color='#AFAFAF'>Total: R$ {formatNumberToBR(installment.value)}</Typography>
                  </div>
                }
                selectedValue={selectedPaymentMethod}
                value={installment.number.toString()}
                index={index}
                maxInstallmentNumber={data.installments.length - 1} 
              />
            ))}
          </Stack>
        </RadioGroup>
      </FormControl>

      <Footer>
        <NavLink to={`/payment/${selectedPaymentMethod}/qrcode`}>
          <Button 
            variant='contained' 
            color='secondary' 
            fullWidth
          >
            Continuar
          </Button>
        </NavLink>
      </Footer>
    </Container>
  )
}