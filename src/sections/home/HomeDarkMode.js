import { m } from 'framer-motion';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
// components
// import { useSettingsContext } from '../../components/settings';
// import SvgColor from '../../components/svg-color';
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundImage: `url('/assets/background/overlay_4.jpg')`,
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(20, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeDarkMode() {
  // const { themeMode, onToggleMode } = useSettingsContext();

  return (
    <StyledRoot>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp}>
          <Typography component="div" variant="overline" sx={{ color: 'primary.main' }}>
            Discover and Taste the Difference
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Typography
            variant="h2"
            sx={{ color: 'common.white', paddingLeft: '2rem', paddingRight: '2rem' }}
          >
            Nature&apos;s Finest Crafted to Perfection
          </Typography>
        </m.div>


        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              color: 'grey.500',
              paddingLeft: { sx: '2rem', sm: 0 },
              paddingRight: { sx: '2rem', sm: 0 },
              marginTop: '1rem'
            }}
            textAlign="justify"
          >
            Delve into the extraordinary with our Raisin Elixir, where quality and nature converge in
            perfect harmony. Rooted in the purest Persian heritage, our elixir is the result of
            meticulous craftsmanship, and an unwavering commitment to 100% natural excellence. From
            the very first selection of raisins, we embrace nature&apos;s gifts, choosing only the finest,
            handpicked raisins that mirror the authenticity of the Persian landscape. The crafting
            process is a testament to our dedication to quality, ensuring a velvety richness and an
            unrivaled depth of flavor in each bottle
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Image
            alt="Raisin Elixir"
            src="/assets/images/home/for_designer.png"
            sx={{
              borderRadius: 2,
              my: { xs: 5, md: 5 },
              boxShadow: (theme) => `-10px 10px 10px ${alpha(theme.palette.common.black, 0.24)}`,
              height: 500
            }}
          />
        </m.div>
      </Container>
    </StyledRoot>
  );
}
