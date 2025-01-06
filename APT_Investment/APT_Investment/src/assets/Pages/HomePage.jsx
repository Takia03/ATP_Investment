//HomePage.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OngoingProjects from '../components/OngoingProjects';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InvestmentStep = styled(Box)(({ theme }) => ({
  padding: 24,
  backgroundColor: '#f5f5f5',
  borderRadius: 16,
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
}));

export default function HomePage() {
  const faqItems = [
    {
      question: 'How does the trial work?',
      answer: 'You get a 14-day free trial with access to all features for unlimited users & clients.',
    },
    {
      question: 'Can I change my plans later?',
      answer: 'Contact our support team for plan changes.',
    },
    {
      question: 'Do I have to know coding to use Agency Handy?',
      answer: 'No coding knowledge required to use our platform.',
    },
  ];

  return (
    <>
      <Box component="main">
        <Header />
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ mt: 8, py: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Invest Today and Build Your Future
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Explore opportunities to grow your wealth through strategic investments.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: '#1976d2',
                  textTransform: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: '#fff',
                    transform: 'scale(1.1)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  },
                  borderRadius: '20px',
                  py: 1,
                  px: 4,
                }}
              >
                Explore Now
              </Button>

              <Stack direction="row" spacing={15} sx={{ mt: 4 }}>
                {[
                  { number: '12K+', label: 'Investments' },
                  { number: '10K+', label: 'Accomplished' },
                  { number: '12K+', label: 'Financed' },
                ].map((stat, index) => (
                  <Box key={index}>
                    <Typography variant="h4" fontWeight="bold">
                      {stat.number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Investment visualization"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'left' }}>
            <Typography variant="h6" color="#1261A0">
              Investment Starts from $500
            </Typography>
          </Box>
        </Container>

        {/* How to Invest Section */}
        <Box sx={{ py: 8, bgcolor: '#fff', mb: 10 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              How to Invest in the Projects?
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Discover how simple it is to start investing with us.
            </Typography>

            <Grid container spacing={4}>
              {[1, 2, 3, 4].map((step, index) => (
                <Grid
                  item
                  xs={12} // Full width on extra small screens
                  sm={6} // Two per row on small screens
                  md={3} // Four per row on medium and larger screens
                  key={step}
                >
                  <InvestmentStep
                    sx={{
                      marginTop: { xs: 2, md: index % 2 !== 0 ? '24px' : '0' },
                      marginBottom: { xs: 2, md: index % 2 === 0 ? '24px' : '0' },
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {step}
                    </Typography>
                    <Typography variant="h5" gutterBottom align="center">
                      Crypto Community
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      Unprecedented access to real investment projects in the real economy globally
                    </Typography>
                  </InvestmentStep>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Ongoing Projects Section */}
        <OngoingProjects />
        <Footer />
      </Box>
    </>
  );
}
