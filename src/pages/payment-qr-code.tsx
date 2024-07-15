import { Alert, Box, Button, Container, IconButton, Typography } from "@mui/material"
import { Footer } from "../components/layout/footer"
import { Header } from "../components/layout/header"
import Qrcode from "../assets/Qrcode.png"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Details } from "../components/details";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from '../utils/payment-mock'
import { formatNumberToBR } from "../utils/format-number-to-br";
import { Check, X } from "@phosphor-icons/react";

export const PaymentQrcode = () => {
  const navigate = useNavigate()
  const { installmentNumber } = useParams()

  if (!installmentNumber) {
    navigate('/')
  }
  
  const [copyQrcode, setCopyQrcode] = useState(false)

  const [ selectedPaymentMethod ] = data.installments.filter(installment => installment.number.toString() === installmentNumber) 
  
  // payment simulation
  useEffect(() => {
    setTimeout(() => {
      installmentNumber === '1' ? navigate(`/payment/${installmentNumber}/completed`) : navigate(`/payment/${installmentNumber}/credit-card`)
    }, 5000)
  }, [navigate, installmentNumber])
  
  return (
    <Container maxWidth='xs' sx={{ textAlign: 'center' }}>
      {copyQrcode && (
        <Alert 
          icon={<Check size={16} weight="bold" />} 
          severity="success"
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setCopyQrcode(false);
              }}
            >
              <X size={16} weight="bold" color=""/>
            </IconButton>
          }  
        >
          Código copiado com sucesso!
        </Alert>
      )}
      <Header title={`${data.customer.name}, pague a entrada de R$ ${formatNumberToBR(selectedPaymentMethod.value)} pelo Pix`} />
      
      <Box 
        sx={{ 
          height: '350px', 
          width: '350px', 
          border: '2px solid #03D69D', 
          borderRadius: '0.5rem', 
          marginBottom: '1.25rem',
          marginInline: 'auto',    
          p: '0.5rem'
        }}>
        <img src={Qrcode} alt="qrcode de pagamento " />
      </Box>

      <Button 
        variant='contained' 
        color='secondary' 
        endIcon={<FileCopyIcon />} 
        onClick={() => {
          navigator.clipboard.writeText(data.brCode)
          setCopyQrcode(true)
        }}
      >
        Clique para copiar QR CODE
      </Button>
      
      <Details 
        installmentNumber={selectedPaymentMethod.number} 
        installmentValue={selectedPaymentMethod.value / selectedPaymentMethod.number} 
        totalValue={selectedPaymentMethod.value}
        expiresDate={data.expiresDate}
        step={0} 
      />

      <Footer>
        <Box>
          <Typography variant="body2" fontWeight='600' color='#B2B2B2'>Identificador:</Typography>
          <Typography variant="body2" fontWeight='800'>{data.correlationID}</Typography>
        </Box>
      </Footer>
    </Container>
  )
}