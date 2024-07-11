import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Payment } from "./pages/payment"
import { createTheme, ThemeProvider } from "@mui/material";
import { PaymentQrcode } from "./pages/paymentQRcode";
import { PaymentCreditCard } from "./pages/paymentCreditCard";

const theme = createTheme({
  typography: {
    h6: {
      fontSize: '1.125rem'
    },
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#03D69D',
    },
    secondary: {
      main: '#133A6F',
    },
    info: {
      main: '#4d4d4d'
    }
  },
});

const router = createBrowserRouter([
  {
    path: "/payment",
    element:  <Payment />
  },
  {
    path: "/payment/:parcelsNumber/qrcode",
    element:  <PaymentQrcode />
  },
    {
    path: "/payment/:parcelsNumber/credit-card",
    element:  <PaymentCreditCard />
  },
  {
    path: "*",
    element: <Navigate to="/payment" replace />
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}