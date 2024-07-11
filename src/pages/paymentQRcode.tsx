import { Alert, Box, Button, Container, IconButton, Typography } from "@mui/material"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import Qrcode from "../assets/Qrcode.png"
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Details } from "../components/details";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from '../utils/paymentMock'
import { formatNumberToBR } from "../utils/formatNumberToBR";
import { Check, X } from "@phosphor-icons/react";

export const PaymentQrcode = () => {
  const navigate = useNavigate()
  const { parcelsNumber } = useParams()
  
  const [copyQrcode, setCopyQrcode] = useState(false)

  const [selectedPayment] = data.filter(payment => payment.parcel.toString() === parcelsNumber)
  
  // payment simulation
  useEffect(() => {
    setTimeout(() => navigate(`/payment/${parcelsNumber}/credit-card`), 5000)
  }, [navigate, parcelsNumber])
  
  return (
    <Container maxWidth='xs'>
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
      <Header title={`João, pague a entrada de R$ ${formatNumberToBR(selectedPayment.parcelValue)} pelo Pix`} />
      
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
        variant="contained" 
        fullWidth 
        endIcon={<FileCopyIcon />} 
        onClick={() => {
          navigator.clipboard.writeText("000201010212261060014br.gov.bcb.pix2584https://api.openpix.com.br/openpix/testing?transactionID=867ba5173c734202ac659721306b38c952040000530398654040.015802BR5909LOCALHOST6009Sao Paulo62360532867ba5173c734202ac659721306b38c963044BCA",
)
          setCopyQrcode(true)
        }}
      >
        Clique para copiar QR CODE
      </Button>
      
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