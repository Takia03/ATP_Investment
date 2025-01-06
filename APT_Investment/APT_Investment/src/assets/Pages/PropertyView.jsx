import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Button,
  Card,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails 
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { properties } from "../../data/properties";



export default function PropertyDetails() {
  const [property, setProperty] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  const fetchPropertyDetails = () => {
    const selectedProperty = properties.find((property) => property.id === id);
    if (selectedProperty) {
      setProperty(selectedProperty);
    } else {
      console.error(`Property with id ${id} not found.`);
    }
  };

  if (!property) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        {/* Main Image */}
        <Box sx={{ py: 4 }}>
          <CardMedia
            component="img"
            height="400"
            image={property.images[0]}
            alt={property.title}
            sx={{ borderRadius: 2 }}
          />
        </Box>

        {/* Property Details */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {property.title}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ${property.price.toLocaleString()}
            </Typography>
            <Typography paragraph>
              {property.description}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Investment Details
              </Typography>
              <Typography>
                Investment Percentage: {property.investmentPercentage}%
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                sx={{ mt: 2 }}
              >
                Invest Now
              </Button>
            </Card>
          </Grid>
        </Grid>

        {/* Image Gallery */}
        <Box sx={{ py: 4 }}>
          <Grid container spacing={2}>
            {property.images.slice(1).map((image, index) => (
              <Grid item xs={6} md={3} key={index}>
                <CardMedia
                  component="img"
                  height="150"
                  image={image}
                  alt={`${property.title} - ${index + 2}`}
                  sx={{ borderRadius: 1 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* FAQ Section */}
        <Box sx={{ py: 4 }}>
          <Typography variant="h5" gutterBottom>
            Frequently Asked Questions
          </Typography>
          {['How can I invest?', 'What are the returns?', 'How long is the investment period?'].map((question, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>{question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}
