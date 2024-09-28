import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import './footer.css';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Stack
      height={50}
      paddingLeft={5}
      paddingRight={5}
      className="footer"
      direction="row"
      alignItems="center"
      justifyContent='center'
    >
      <Typography variant="body1" fontWeight={300}>
        Website &copy; {year}
      </Typography>
    </Stack>
  );
};
