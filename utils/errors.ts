import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { SerializedError } from '@reduxjs/toolkit';

type ErrorType = FetchBaseQueryError | SerializedError;
export const handleApiErrors = (error: ErrorType) => {
  if ('status' in error) {
    return 'error' in error ? error.error : JSON.stringify(error.data);
  } else {
    return error.message;
  }
};
