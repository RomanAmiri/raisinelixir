import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Pure Persian Heritage',
    description: 'Our Raisin Elixir is a true embodiment of Persian heritage. Crafted with a recipe that has been cherished for generations, each bottle carries the legacy of traditional craftsmanship. We take pride in preserving the essence of Persian culture, making every sip a journey through time and tradition',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: '100% Natural Goodness',
    description:
      " We believe that the best products are born from nature. That's why our Raisin Elixir contains only 100% natural ingredients. We carefully select the finest raisins, ensuring the absence of artificial additives. It's pure, wholesome, and a testament to our commitment to your well-being",
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Unparalleled Quality',
    description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
  },
];

const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  padding: theme.spacing(10, 5),
  [theme.breakpoints.up('md')]: {
    boxShadow: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function HomeMinimal() {
  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ color: 'text.disabled' }}>
              HANDMADE
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="h2">
              CRAFTING HERITAGE
            </Typography>
          </m.div>
        </Stack>

        <Box
          gap={{ xs: 3, lg: 10 }}
          display="grid"
          alignItems="center"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
          {CARDS.map((card, index) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <StyledCard
                sx={{
                  ...(index === 1 && {
                    boxShadow: (theme) => ({
                      md: `-10px 10px 10px ${theme.palette.mode === 'light'
                          ? alpha(theme.palette.grey[500], 0.16)
                          : alpha(theme.palette.common.black, 0.4)
                        }`,
                    }),
                  }),
                }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  sx={{ mx: 'auto', width: 48, height: 48 }}
                />

                <Typography variant="h5" sx={{ mt: 8, mb: 2 }}>
                  {card.title}
                </Typography>

                <Typography
                  style={{
                    textAlign: 'justify'
                  }} sx={{ color: 'text.secondary' }}>{card.description}</Typography>
              </StyledCard>
            </m.div>
          ))}
        </Box>
      </Container>
    </StyledRoot>
  );
}
