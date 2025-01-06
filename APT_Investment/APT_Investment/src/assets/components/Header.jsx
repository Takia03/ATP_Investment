import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  borderBottom: '1px solid #eaeaea',
});

const StyledButton = styled(Button)({
  textTransform: 'none',
  fontWeight: 500,
});

const SignUpButton = styled(Button)({
  textTransform: 'none',
  color: '#1976d2',
  ":hover": {
    transform: 'scale(1.1)',
  },
});

const DownloadButton = styled(Button)({
  textTransform: 'none',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #e0e0e0',
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'scale(1.1)',
  },
});

export default function Header() {
  return (
    <StyledAppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', padding: '8px 0' }}>
          <Box display="flex" alignItems="center">
            <Typography
              variant="h6"
              component="div"
              sx={{ display: 'flex', alignItems: 'center', color: '#000' }}
            >
              ATP INVESTMENT
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <StyledButton color="inherit"
             sx={{
                 color: '#000',
                 ":hover": {
                        transform: 'scale(1.1)',
                    },
                }}>
              Invest
            </StyledButton>
            <StyledButton color="inherit" 
            sx={{ 
                color: '#000',
                ":hover": {
                        transform: 'scale(1.1)',
                    },
                }}>
              Promotions
            </StyledButton>
            <StyledButton color="inherit" 
            sx={{
                color: '#000',
                ":hover": {
                       transform: 'scale(1.1)',
                   },
               }}>
              Sign In
            </StyledButton>
            <SignUpButton>
              Sign Up
            </SignUpButton>
            <DownloadButton variant="outlined">
              Download App
            </DownloadButton>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}

