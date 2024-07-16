import { Box, Button, Container, FormControl, TextField, Typography } from '@mui/material';
import { Header } from '../components/layout/header';
import { useNavigate, useParams } from 'react-router-dom';
import { Details } from '../components/details';
import { Footer } from '../components/layout/footer';
import { data } from '../utils/payment-mock';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Modal } from '../components/modal';
import { formatCPF } from '../utils/format/cpf';
import { formatCardNumber } from '../utils/format/card-number';
import { formatExpiryDate } from '../utils/format/card-expiry-date';

const schema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  cpf: z.string().min(1, 'Campo obrigatório'),
  cardNumber: z.string().min(1, 'Campo obrigatório'),
  expiryDate: z.string().min(1, 'Campo obrigatório'),
  cvv: z.string().min(1, 'Campo obrigatório')
});

type FormData = z.infer<typeof schema>;

export const PaymentCreditCard = () => {
  const navigate = useNavigate();
  const { installmentNumber } = useParams();

  const [paymentCompleted, setPaymentCompleted] = useState(false);

  if (!installmentNumber) {
    navigate('/');
  }

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      cpf: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  });

  const cardValue = watch('cardNumber', '');
  const expiryValue = watch('expiryDate', '');
  const cvvValue = watch('cvv', '');

  const onSubmit = (data: FormData) => {
    console.log(data); // call api with submitted data
    navigate(`/payment/${installmentNumber}/completed`);
  };

  const [selectedPaymentMethod] = data.installments.filter(
    (installment) => installment.number.toString() === installmentNumber
  );

  const handleClose = () => {
    setPaymentCompleted(false);
    navigate('/');
  };

  return (
    <Container maxWidth="xs">
      {paymentCompleted && (
        <Modal title="Pagamento concluido!" handleClose={handleClose}>
          O pagamento foi concluido com sucesso!
        </Modal>
      )}

      <Header
        title={`${data.customer.name}, pague o restante em ${parseInt(installmentNumber as string) - 1}x no cartão`}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nome"
          fullWidth
          {...register('name')}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <Controller
          name="cpf"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="CPF"
              variant="outlined"
              onChange={(e) => {
                const formattedValue = formatCPF(e.target.value);
                setValue('cpf', formattedValue);
              }}
              error={!!errors.cpf}
              helperText={errors.cpf ? errors.cpf.message : ''}
            />
          )}
        />
        <Controller
          name="cardNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Número do Cartão"
              variant="outlined"
              value={cardValue}
              onChange={(e) => {
                const formattedValue = formatCardNumber(e.target.value);
                setValue('cardNumber', formattedValue);
              }}
              error={!!errors.cardNumber}
              helperText={errors.cardNumber ? errors.cardNumber.message : ''}
            />
          )}
        />
        <FormControl sx={{ display: 'flex', flexDirection: 'row', gap: '1.25rem' }}>
          <Controller
            name="expiryDate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Validade"
                variant="outlined"
                value={expiryValue}
                onChange={(e) => {
                  const formattedValue = formatExpiryDate(e.target.value);
                  setValue('expiryDate', formattedValue);
                }}
                error={!!errors.expiryDate}
                helperText={errors.expiryDate ? errors.expiryDate.message : ''}
              />
            )}
          />
          <Controller
            name="cvv"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="CVV"
                variant="outlined"
                inputProps={{ maxLength: 4 }}
                value={cvvValue}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  setValue('cvv', value);
                }}
                error={!!errors.cvv}
                helperText={errors.cvv ? errors.cvv.message : ''}
              />
            )}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="secondary" fullWidth>
          Pagar
        </Button>
      </form>

      <Details
        installmentNumber={selectedPaymentMethod.number}
        installmentValue={selectedPaymentMethod.value / selectedPaymentMethod.number}
        totalValue={selectedPaymentMethod.value}
        expiresDate={data.expiresDate}
        step={1}
      />

      <Footer>
        <Box>
          <Typography variant="body2" fontWeight="600" color="info.100">
            Identificador:
          </Typography>
          <Typography variant="body2" fontWeight="800">
            2c1b951f356c4680b13ba1c9fc889c47
          </Typography>
        </Box>
      </Footer>
    </Container>
  );
};
