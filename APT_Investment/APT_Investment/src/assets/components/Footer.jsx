//Footer.jsx--component
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Link, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  TextField,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledFooter = styled(Box)({
  borderTop: '1px solid #eaeaea',
  backgroundColor: '#fff',
  padding: '48px 0 24px',
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const faqItems = [
  {
    question: "How does the trial work?",
    answer: "You get a 14-day free trial where you get access to all the features for unlimited users & clients. After the 14-day free trial, you will get the option of choosing our standard package or contacting sales to further continue using it."
  },
  {
    question: "Can I change my plans later?",
    answer: "Contact our support team for plan changes."
  },
  {
    question: "Do I have to know coding to use Agency Handy?",
    answer: "No coding knowledge required to use our platform."
  },
];

export default function Footer() {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        {/* FAQ Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {faqItems.map((item, index) => (
            <Accordion key={index} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="md">
          <Box sx={{ 
            p: 4, 
            border: '2px solid #1976d2', 
            borderRadius: 2,
            position: 'relative',
            bgcolor: '#fff'
          }}>
            <Box sx={{ 
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              bgcolor: '#1976d2'
            }} />
            
            <Typography variant="h4" align="center" gutterBottom>
              Join us to learn more about investments and grow with us
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" paragraph>
              Stay up to date with latest projects we are bringing and invest to earn
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                sx={{ width: '300px' }}
              />
              <Button variant="contained" 
              sx={{
                  
                 ":hover": {
                    transform: 'scale(1.1)',
                    color: '#fff',
                  },
                 }}>
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

        {/* Footer Content */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <Box mb={3}>
              <Typography variant="h6" component="div" gutterBottom>
                ATP Investment
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Please contact us if you have any specific request:
              </Typography>
              <StyledLink href="mailto:atp@gmail.com" color="primary">
                atp@gmail.com
              </StyledLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
              COMPANY
            </Typography>
            <Box>
              <StyledLink href="#" display="block" mb={1}>
                How it works
              </StyledLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
              SOCIALS
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <StyledLink href="#">Twitter</StyledLink>
              <StyledLink href="#">Instagram</StyledLink>
              <StyledLink href="#">LinkedIn</StyledLink>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid #eaeaea',
            textAlign: 'center',
          }}
        >
          © 2023 ATP Investment. All rights reserved
        </Typography>
      </Container>
    </StyledFooter>
  );
}
