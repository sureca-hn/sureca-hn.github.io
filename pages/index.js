import * as React from 'react';
import Image from 'next/image'
import Head from 'next/head'
import { Typography, Container, Grid2 as Grid, Box, Card, CardContent, CardMedia, IconButton } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { DirectionsCar, Build, Spa, WhatsApp as WhatsAppIcon } from '@mui/icons-material'
import { Fab, Tooltip, Zoom } from '@mui/material'

function CategoryCard({ icon, title, description }) {
  return (
    <Card sx={{ borderRadius: 5, boxShadow: 3 }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: "400px"}}>
          {icon}
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{ wordWrap: "break-word" }}>
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

function WhatsAppContact({ phoneNumber, message }) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <Tooltip
        title="Contactenos!"
        placement="left"
        slots={{
            transition: Zoom
        }}
      >
        <Fab
          color="whatsapp"
          onClick={handleClick}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            '&:hover': {
              transform: 'scale(1.1)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          <WhatsAppIcon color="#000000"/>
        </Fab>
      </Tooltip>
  );
}

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>SURECA</title>
      </Head>
      <main>
        {/* Hero Section */}
        <Box sx={{ bgcolor: 'background.paper', py: 4}}>
          <Grid container maxWidth="xl" columns={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
            <Grid item> 
                <Image src="/images/svg/logo.svg" alt="Logo" width={400} height={100} style={{ alignItems: "center", justifyContent: "center" }}/>
            </Grid>
            <Grid item>
                <Typography variant="h5" color="text.secondary" component="paragraph">
                  Suplidora de equipo automotriz, industrial, y agrícola.
                </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Product Categories */}
        <Container sx={{ py: 8 }} maxWidth="xl" id="lineas">
          <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom>
            Nuestras Lineas
          </Typography>
          <Grid container columns={3} spacing={4} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Grid item xs={12} sm={4}>
              <CategoryCard
                icon={<DirectionsCar fontSize="large" />}
                title="Automotriz"
                description="Repuestos para todo tipo de carro y equipo pesado."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CategoryCard
                icon={<Build fontSize="large" />}
                title="Industrial"
                description="Equipo para industrializacion de talleres mecanicos."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <CategoryCard
                icon={<Spa fontSize="large" />}
                title="Agricultura"
                description="Tecnifique sus operaciones con nuestra gama de productos."
              />
            </Grid>
          </Grid>
        </Container>

        {/* Featured Products */}
        <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
          <Container maxWidth="md">
            <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom>
              Nuestras Marcas
            </Typography>
            <BrandCarousel
                brands={
                    [
                        { name: 'STIHL', logo: '/images/svg/stihl.svg?height=100&width=200' },
                        { name: 'Bendix', logo: '/images/svg/bendix.svg?height=100&width=200' },
                        { name: 'Makita', logo: '/images/svg/makita.svg?height=100&width=200' },
                        { name: 'Payen', logo: '/images/svg/payen.svg?height=100&width=200' },
                        { name: 'Koyo', logo: '/images/svg/koyo.svg?height=100&width=200' },
                        { name: 'H. Paulin', logo: '/images/svg/paulin.svg?height=100&width=200' },
                    ]
                }>
            </BrandCarousel>
          </Container>
        </Box>

        {/* About Us */}
        <Container sx={{ py: 8 }} maxWidth="md" id="about">
          <Typography component="h2" variant="h4" align="center" color="text.primary" gutterBottom>
           Acerca de SURECA
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" component="paragraph">
            SURECA, lleva mas de 40 años proveyendo calidad en equipo automotriz, industrial, y agrícola. Nuestra mision es crecer junto a usted!
          </Typography>
        </Container>

        {/* Contact Form */}
        <WhatsAppContact
          phoneNumber="+50499282701"
          message="Buen dia, me gustaria saber acerca de "
        />
      </main>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
            © 2025 SURECA. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}


function BrandCarousel({ brands }) {
  const [startIndex, setStartIndex] = React.useState(0);

  const handlePrev = () => {
    setStartIndex((prevIndex) => ((prevIndex - 1) + brands.length) % brands.length);
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % brands.length);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%', maxWidth: 800, margin: 'auto', py: 4 }}>
      <IconButton onClick={handlePrev} sx={{ bgcolor: 'rgba(0,0,0,0.1)', '&:hover': { bgcolor: 'rgba(0,0,0,0.2)' } }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, overflow: 'hidden', width: '100%' }}>
        {[0, 1, 2].map((offset) => {
          const index = (startIndex + offset) % brands.length;
          return (
            <Card key={brands[index].name} sx={{ width: 200, boxShadow: 'none', bgcolor: 'transparent' }}>
              <CardMedia
                component="img"
                height="100"
                image={brands[index].logo}
                alt={brands[index].name}
                sx={{ objectFit: 'contain', transition: 'transform 0.3s ease-in-out' }}
              />
            </Card>
          );
        })}
      </Box>

      <IconButton onClick={handleNext} sx={{ bgcolor: 'rgba(0,0,0,0.1)', '&:hover': { bgcolor: 'rgba(0,0,0,0.2)' } }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
