import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

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

export default function Footer() {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
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
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
              COMPANY
            </Typography>
            <Box>
              <StyledLink href="#" display="block" mb={1}>
                How it works
              </StyledLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
              SOCIALS
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              <StyledLink href="#">Twitter</StyledLink>
              <StyledLink href="#">Instagram</StyledLink>
              <StyledLink href="#">Twitter</StyledLink>
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
            textAlign: 'left' 
          }}
        >
          © 2023 lorem epsum All rights reserved
        </Typography>
      </Container>
    </StyledFooter>
  );
}

