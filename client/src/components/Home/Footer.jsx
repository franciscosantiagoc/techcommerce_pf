import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";
import React from "react";


import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Container,
  Left,
  Logo,
  Description,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  Right,
  ContactItem,
  Payment
} from '../../assets/styles/Footer.elements'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Tech-C</Logo>
        <Description>
        Tech-C es un E-commerce orientado a la tecnología que ofrece una amplia variedad de productos de calidad y alta gama.
        Siéntate y navega por nuestra tienda online.
        </Description>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook></Facebook>
          </SocialIcon>
          <SocialIcon color="e4405F">
            <Instagram></Instagram>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter></Twitter>
          </SocialIcon>
          <SocialIcon color="E60023">
            <LinkedIn></LinkedIn>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Rutas Utiles:</Title>
        <List>
          <ListItem href="http://localhost:3000/">Home</ListItem>
          <ListItem href="http://localhost:3000/products">Productos</ListItem>
          <ListItem href="http://localhost:3000/register">Register </ListItem>
          <ListItem href="http://localhost:3000/login">Login</ListItem>
          <ListItem href="http://localhost:3000/dashboard">Dashboard</ListItem>
          <ListItem href="http://localhost:3000/ayuda">  Ayuda </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Pagos con:</Title>
        <Payment src="https://icon-library.com/images/discover-credit-card-icon/discover-credit-card-icon-7.jpg" />
      </Right>
    </Container>
  );
};

export default Footer;
