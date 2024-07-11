import { Box, Button, Container, FormControl, RadioGroup, Typography } from '@mui/material'
import { Header } from '../components/header'
import { ChangeEvent, useState } from 'react';
import { InputRadio } from '../components/inputRadio';
import { data } from '../utils/paymentMock'
import { Footer } from '../components/footer';
import { Banner } from '../components/banner';
import { NavLink } from 'react-router-dom';
import { formatNumberToBR } from '../utils/formatNumberToBR';

export const Payment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('1');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod((event.target as HTMLInputElement).value);
  };
  
  return (
    <Container maxWidth="xs">
      <Header title='João, como você quer pagar?'/>

      <FormControl fullWidth>
        <RadioGroup
          name="selected-payment-method"
          value={selectedPaymentMethod}
          onChange={handleChange}
        >
          {data.map((option, index) => (
            <InputRadio 
              key={option.parcel}
              label={
                <div style={{ width: '100%' }}>
                  <Typography variant='h5'><strong>{option.parcel}x</strong> R$ {formatNumberToBR(option.parcelValue)}</Typography>
                  {index !== 0 && <Typography color='#AFAFAF'>Total: R$ {formatNumberToBR(option.total)}</Typography>}
                  {index === 0 && <Typography color='primary'>Ganhe 3% de Cashback</Typography>}
                  {index === 0 && (
                    <Banner>
                      <Box>
                        <Typography variant='body2'>
                          🤑 R$ <strong>300,00</strong> de volta no seu Pix na hora
                        </Typography>
                        <div className={`ribbon ${selectedPaymentMethod == option.parcel.toString() ? 'ribbon-active' : ''}` }></div>
                      </Box>
                    </Banner>
                  )}
                  {index === 3 && (
                    <Banner>
                      <Box>
                        <Typography variant='body2'>
                          <strong>-3% de juros:</strong> Melhor opção
                        </Typography>
                        <div className={`ribbon ${selectedPaymentMethod == option.parcel.toString() ? 'ribbon-active' : ''}` }></div>
                      </Box>
                    </Banner>
                    
                  )}
                </div>
              }
              selectedValue={selectedPaymentMethod}
              value={option.parcel.toString()}
              index={index} 
            />
          ))}
        </RadioGroup>
      </FormControl>

      <Footer>
        <NavLink to={`/payment/${selectedPaymentMethod}/qrcode`}>
          <Button variant='contained' fullWidth>Continuar</Button>
        </NavLink>
      </Footer>
    </Container>
  )
}