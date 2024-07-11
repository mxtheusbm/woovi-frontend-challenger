import { Box, Button, Container, FormControl, TextField, Typography } from "@mui/material"
import { Header } from "../components/header"
import { useNavigate, useParams } from "react-router-dom"
import { Details } from "../components/details"
import { Footer } from "../components/footer"
import { data } from '../utils/paymentMock'
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react"
import { Modal } from "../components/modal"

const schema = z.object({
  name: z.string().min(1, "Campo obrigatório"),
  cpf: z.string().min(1, "Campo obrigatório").regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido, ex: XXX.XXX.XXX-XX"),
  cardNumber: z.string().regex(/^\d{16}$/, "Número do cartão inválido"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Validade do cartão inválida, ex: MM/AA"),
  cvv: z.string().regex(/^\d{3,4}$/, "CVV deve ter de 3 a 4 dígitos"),
});

type FormData = z.infer<typeof schema>

export const PaymentCreditCard = () => {
  const navigate = useNavigate()
  const { parcelsNumber } = useParams()

  const [paymentCompleted, setPaymentCompleted] = useState(false)
    
  if (!parcelsNumber) {
    navigate('/')
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: {
    name: '',
    cpf: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  }})

  const onSubmit = (data: FormData) => {
    console.log(data); // call api with submitted data
    setPaymentCompleted(true)
 };

  const [selectedPayment] = data.filter(payment => payment.parcel.toString() === parcelsNumber)

  const handleClose = () => {
    setPaymentCompleted(false)
    navigate('/')
  } 

  return (
    <Container maxWidth='xs'>
      {paymentCompleted && (
        <Modal
          title="Pagamento concluido!"
          handleClose={handleClose}
        >
          O pagamento foi concluido com sucesso!
        </Modal>
      )}

      <Header title={`João, pague o restante em ${parseInt(parcelsNumber as string) - 1}x no cartão`} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nome"
          fullWidth
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          label="CPF"
          fullWidth
          {...register("cpf")}
          error={!!errors.cpf}
          helperText={errors.cpf?.message}
        />
        <TextField
          label="Número de cartão"
          fullWidth
          {...register("cardNumber")}
          error={!!errors.cardNumber}
          helperText={errors.cardNumber?.message}
        />
        <FormControl sx={{ display: 'flex', flexDirection: 'row' ,gap: '1.25rem' }}>
          <TextField
            label="Vencimento"
            fullWidth
            {...register("expiryDate")}
            error={!!errors.expiryDate}
            helperText={errors.expiryDate?.message}
          />
          <TextField
            label="CVV"
            fullWidth
            {...register("cvv")}
            error={!!errors.cvv}
            helperText={errors.cvv?.message}
          />
        </FormControl>

        <Button type="submit" variant="contained" color="primary" fullWidth>Pagar</Button>
      </form>

      <Details 
        parcelsNumber={selectedPayment.parcel} 
        parcelValue={selectedPayment.parcelValue} 
        totalValue={selectedPayment.total} 
      />

      <Footer>
        <Box>
          <Typography variant="body2" fontWeight='600' color='#B2B2B2'>Identificador:</Typography>
          <Typography variant="body2" fontWeight='800'>2c1b951f356c4680b13ba1c9fc889c47</Typography>
        </Box>
      </Footer>
    </Container>
  )
}