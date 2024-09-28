import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import './header.css';

export const Header = () => {
  return (
    <Stack
      height={100}
      direction="row"
      className="header"
      alignItems="center"
      paddingLeft={5}
      paddingRight={5}
    >
      <Stack direction="row">
        <Typography variant="body1" className="header-logo">
          Logo
        </Typography>
        <Typography variant="body1" className="header-logo-rest">
          Motto
        </Typography>
      </Stack>

      <Stack direction="row"></Stack>
    </Stack>
  );
};
