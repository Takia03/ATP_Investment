import { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';



const StyledCard = styled(Card)({
  maxWidth: '100%',
  borderRadius: 16,
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for smooth hover effect
  '&:hover': {
    transform: 'scale(1.05)', // Slight scaling effect on hover
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Adding shadow on hover
  },
  borderRadius: '16px',
});

const NavigationDot = styled(Box)(({ theme, isActive }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: isActive ? theme.palette.primary.main : theme.palette.grey[300],
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}));

export default function OngoingProjects() {
  const [currentPage, setCurrentPage] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Sheorapara Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
    {
      id: 2,
      title: "Sheora Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
    {
      id: 3,
      title: "Sheorapara Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
    {
      id: 4,
      title: "Sheorapara Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
    {
      id: 5,
      title: "Sheorapara Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
    {
      id: 6,
      title: "Sheorapara Vegetable Farm",
      location: "Thakurgaon, Bangladesh",
      price: "55,000 BDT/Unit",
      image: "./picture/Farm.jpg?height=200&width=300",
    },
  ];

  const itemsPerPage = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage.desktop);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/property/${id}`);
  };
  
  
  const getVisibleProjects = () => {
    const start = currentPage * itemsPerPage.desktop;
    return projects.slice(start, start + itemsPerPage.desktop);
  };

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom>
          Ongoing Investment Options
        </Typography>
        
        <Box sx={{ position: 'relative', mt: 4 }}>
          <Box
            sx={{
              display: 'grid',
              gap: 3,
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              position: 'relative',
              minHeight: '400px',
            }}
          >
            {getVisibleProjects().map((project) => (
              <StyledCard key={project.id}>
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.location}
                  </Typography>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {project.price}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Target Achieve: 60%
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{
                        borderRadius: 10,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                          color: '#fff',
                        },
                      }}
                      onClick={() => handleViewDetails(project.id)}
                    >
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </StyledCard>
            ))}
          </Box>

          <IconButton
            onClick={handlePrev}
            sx={{
              position: 'absolute',
              left: { xs: 'calc(50% - 60px)', md: -20 },
              bottom: { xs: -60, md: '50%' },
              transform: { md: 'translateY(50%)' },
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.paper' },
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 'calc(50% - 60px)', md: -20 },
              bottom: { xs: -60, md: '50%' },
              transform: { md: 'translateY(50%)' },
              bgcolor: 'background.paper',
              boxShadow: 1,
              '&:hover': { bgcolor: 'background.paper' },
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        {/* Navigation Dots */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mt: { xs: 10, md: 4 } }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <NavigationDot
              key={index}
              isActive={currentPage === index}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </Stack>
        <Box sx={{ textAlign: 'right', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/all-projects')}
            sx = {{
                px : 4,
                py : 2,
                frontSize : 20,
                borderRadius : 10,
                transition : 'all 0.3s ease',
                '&:hover' : {
                    backgroundColor : 'primary.dark',
                    color : '#fff',
                    transform : 'scale(1.1)',
                    boxShadow : '0 4px 12px rgba(0,0,0,0.1)',
                },
            }}
          >

            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
