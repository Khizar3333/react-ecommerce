import TextDecoder from 'text-encoding'; 

import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './components/Navbar'; // Replace with your component path

test('Navbar renders correctly for non-authenticated user', () => {
  render(<Navbar user={false} />);

  // Assertions for logo, container classes, and links
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
  expect(screen.getByTestId('navbox')).toBeInTheDocument(); // Add a data-testid attribute for the navbox
  expect(screen.getByRole('link', { name: /signup/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
});
