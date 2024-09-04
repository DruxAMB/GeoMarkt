import axios from 'axios';

const CIRCLE_API_URL = 'https://api.circle.com/v3'; 

export const createPayment = async (amount, currency) => {
  const response = await axios.post(
    `${CIRCLE_API_URL}/payments`,
    {
      amount,
      currency,
    },
    {
      headers: {
        'Authorization': `Bearer ${CCIPAT_F6PkhoULoRbLb8uoKJq6m1_415f57c47855126a2870ed206796494d24a3f90a}`,
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
};