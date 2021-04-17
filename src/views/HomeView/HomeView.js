import React from 'react';
import { Container, Typography } from '@material-ui/core';

const HomeView = () => (
  <Container maxWidth="md">
    <Typography variant="h3" color="primary" align="center">
      {' '}
      Welcome to your Phonebook
    </Typography>
  </Container>
);

export default HomeView;
