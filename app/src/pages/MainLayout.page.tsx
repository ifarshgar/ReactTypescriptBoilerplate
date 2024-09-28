import Stack from '@mui/material/Stack';
import { HeaderContainer } from 'Containers/Header.container';
import { Outlet } from 'react-router-dom';
import { Footer } from 'Views/index';

export const MainLayoutPage = () => {
  return (
    <Stack>
      <HeaderContainer />
      <Outlet />
      <Footer />
    </Stack>
  );
};
