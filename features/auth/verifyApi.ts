import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@env';
export const verifyApi = createApi({
  reducerPath: 'verifyApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    sendSmsVerify: builder.mutation({
      query: (body) => ({
        url: '/start-verify',
        method: 'POST',
        body: {
          to: body,
          channel: 'sms',
        },
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    checkVerification: builder.mutation({
      query: (body) => ({
        url: '/check-verify',
        method: 'POST',
        body: JSON.stringify({
          to: body.phoneNumber,
          code: body.code,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useSendSmsVerifyMutation, useCheckVerificationMutation } = verifyApi;
