import Container from '@mui/material/Container';
import { FooterContainer } from 'Containers/Footer.container';
import { HeaderContainer } from 'Containers/Header.container';
import { Outlet } from 'react-router-dom';

export const MainLayoutPage = () => {
  return (
    <Container>
      <HeaderContainer />
      <Outlet />
      <FooterContainer />
    </Container>
  );
};
