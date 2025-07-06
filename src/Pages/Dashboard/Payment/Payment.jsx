import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import PaymentForm from './PaymentForm';

const stripePromised = loadStripe(import.meta.env.VITE_payment_key);

const Payment = () => {
  return (
    <Elements stripe={stripePromised}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payment;