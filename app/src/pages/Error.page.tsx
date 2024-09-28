import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useRouteError } from 'react-router-dom';

export type ErrorType = {
  statusText: string;
  message: string;
};

export const ErrorPage = () => {
  const error = useRouteError() as ErrorType;
  console.error(error);

  const getErrorMessage = () => {
    if (error?.statusText) {
      return error.statusText;
    }
    if (error?.message) {
      return error.message;
    }
  };

  return (
    <Stack id="error-page" alignItems="center" mt={20}>
      <Typography variant="h1" fontSize={50}>
        Oops!
      </Typography>
      <Typography variant="body1" fontSize={26} fontWeight={300} mt={2}>
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: 'italic' }} mt={2}>
        {getErrorMessage()}
      </Typography>
    </Stack>
  );
};
