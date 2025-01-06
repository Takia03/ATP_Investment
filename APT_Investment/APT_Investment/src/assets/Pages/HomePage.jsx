import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import OngoingProjects from '../components/OngoingProjects'; // Ensure this import is correct.

const InvestmentStep = styled(Box)(({ theme }) => ({
    padding: 24,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    height: '100%',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for smooth hover effect
    '&:hover': {
      transform: 'scale(1.05)', // Slight scaling effect on hover
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
      cursor : 'pointer', // Change cursor to pointer on hover
    },
  }));
  
const projects = [
  { id: 1, title: 'Project 1', image: 'image1.jpg', location: 'Location 1', price: '$100' },
  { id: 2, title: 'Project 2', image: 'image2.jpg', location: 'Location 2', price: '$200' },
  { id: 3, title: 'Project 3', image: 'image3.jpg', location: 'Location 3', price: '$300' },
  { id: 4, title: 'Project 4', image: 'image4.jpg', location: 'Location 4', price: '$400' },
];

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
        </Container>

        {/* How to Invest Section */}
        <Box sx={{ py: 8, bgcolor: '#fff', mb : 10}}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              How to Invest in the Projects?
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 6 }}>
              Discover how simple it is to start investing with us.
            </Typography>

            <Grid container spacing={3}>
            {[1, 2, 3, 4].map((step, index) => (
                <Grid item xs={12} sm={6} md={3} key={step}>
                   <InvestmentStep
                     sx={{
                        marginTop: index % 2 !== 0 ? '24px' : '0', // Add margin top for even steps
                        marginBottom: index % 2 === 0 ? '24px' : '0', // Add margin bottom for odd steps
                        }}
            >
                <Typography variant="h6" gutterBottom>
            {step}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Crypto Community
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Unprecedented access to real investment projects in the real economy globally
        </Typography>
      </InvestmentStep>
    </Grid>
  ))}
</Grid>

          </Container>
        </Box>

        {/* Investment Options Section */}
        <OngoingProjects projects={projects} />

        {/* FAQ Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              Frequently Asked Questions
            </Typography>

            <Box sx={{ mt: 4 }}>
              {faqItems.map((item, index) => (
                <Accordion key={index} sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">{item.question}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography color="text.secondary">{item.answer}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Newsletter Section */}
        <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
          <Container maxWidth="md">
            <Box
              sx={{
                p: 4,
                border: '2px solid #1976d2',
                borderRadius: 2,
                position: 'relative',
                bgcolor: '#fff',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '4px',
                  bgcolor: '#1976d2',
                }}
              />
              <Typography variant="h4" align="center" gutterBottom>
                Join us to learn more about investments and grow with us
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary" paragraph>
                Stay updated with the latest projects.
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  sx={{ width: '300px' }}
                />
                <Button variant="contained" 
                sx={{ 
                    
                    backgroundColor: 'primary.dark',
                    color: '#fff',
                    borderRadius: '10px',
                    ":hover": {
                        backgroundColor: 'primary.dark',
                        color: '#fff',
                        transform: 'scale(1.1)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    },
                     }}>
                  Sign Up
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
     
    </>
  );
}
