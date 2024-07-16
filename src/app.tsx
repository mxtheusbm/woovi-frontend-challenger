import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Payment } from './pages/payment';
import { ThemeProvider } from '@mui/material';
import { PaymentQrcode } from './pages/payment-qr-code';
import { PaymentCreditCard } from './pages/payment-credit-card';
import { theme } from './utils/theme';
import { PaymentCompleted } from './pages/payment-completed';

const router = createBrowserRouter([
  {
    path: '/payment',
    element: <Payment />
  },
  {
    path: '/payment/:installmentNumber/qrcode',
    element: <PaymentQrcode />
  },
  {
    path: '/payment/:installmentNumber/credit-card',
    element: <PaymentCreditCard />
  },
  {
    path: '/payment/:installmentNumber/completed',
    element: <PaymentCompleted />
  },
  {
    path: '*',
    element: <Navigate to="/payment" replace />
  }
]);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
