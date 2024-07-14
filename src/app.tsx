import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Payment } from "./pages/payment"
import { ThemeProvider } from "@mui/material";
import { PaymentQrcode } from "./pages/paymentQRcode";
import { PaymentCreditCard } from "./pages/paymentCreditCard";
import { theme } from "./utils/theme";

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