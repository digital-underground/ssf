import React from 'react'
import './index.css' // Optional: For any custom styles
import Header from "../components/header";
import Footer from "../components/footer";
import Divider from '@mui/material/Divider';
import Testimonials from '../components/testimonials';
import getLPTheme from './getLPTheme';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';



export default function IndexPage() {
  const [mode, setMode] = React.useState('light');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
    <Header />
    <Divider />
    <Box sx={{ bgcolor: 'background.default', marginTop: '464px' }}>
      <Divider />
      <Testimonials />
      <Divider />
      <Divider />
      <Footer />
    </Box>
  </ThemeProvider>
);
}


