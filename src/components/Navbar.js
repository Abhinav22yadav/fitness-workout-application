import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '122px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt='logo' style={{ width: '42px', height: '35px', margin: '0 20px' }} />
      </Link>

      <Stack
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>HomePage</Link>
        <Link to="/exercise" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625' }}></Link> {/* Corrected link */}
        <Link to="/bmicalculator" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625' }}>BMI Calculator</Link>
        <Link to="/activity" style={{ textDecoration: 'none', color: '#3A1212',borderBottom: '3px solid #FF2625' }}>Activities</Link> {/* Updated link */}
      </Stack>
    </Stack>
  )
}

export default Navbar;
