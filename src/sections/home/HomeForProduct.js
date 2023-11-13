import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Card, Container, Typography, Stack } from '@mui/material';
// components
import Image from '../../components/image';
import { MotionViewport, varFade } from '../../components/animate';
import CardComponent from '../../components/card/CardComponent';

// ----------------------------------------------------------------------


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

const CARDS = [
    {
        image: ' /assets/images/home/raisin/pure_green_350.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Green (350ML)',
        description: "Embark on a journey of pure delight with our 350ml Green Holographic Pure Raisin Elixir. The refreshing essence of raisins meets a vibrant holographic experience, creating a lighter elixir for those seeking a mild, enchanting taste",
    },
    {
        image: ' /assets/images/home/raisin/pure_blue_350.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Blue (350ML)',
        description: "Unleash the rich flavor of pure raisins in our 350ml Blue Holographic Pure Raisin Elixir. The captivating blue holographic label enhances the magic within, providing a balanced and delightful experience for your senses",
    },
    {
        image: ' /assets/images/home/raisin/pure_blue_100.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Blue (100ML)',
        description: "Enjoy the allure of our Blue Holographic Pure Raisin Elixir in a convenient 100ml size. This pocket-sized variant retains the enchanting essence of our larger bottles, ensuring a delightful and refreshing experience on the go",
    },
    {
        image: ' /assets/images/home/raisin/pure_red_350.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Red (350ML)',
        description: "Elevate your senses with our 350ml Red Holographic Pure Raisin Elixir. The intense flavor of pure raisins is beautifully presented with a striking red holographic label, offering a bolder and satisfying elixir experience",
    },
    {
        image: ' /assets/images/home/raisin/pure_blue_350.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Blue (350ML)',
        description: "Immerse yourself in the 350ml Blue Holographic Cinnamon Raisin Elixir, a perfect harmony of cinnamon and raisin flavors, Providing a delightful elixir journey for those who appreciate a larger portion of this unique blend",
    },
    {
        image: ' /assets/images/home/raisin/pure_red_100.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Blue (100ML)',
        description: "Delight in the fusion of cinnamon and raisin with our 100ml Blue Holographic Cinnamon Raisin Elixir. The enchanting blue holographic label adds a touch of magic to this unique blend, providing a perfect balance for cinnamon enthusiasts",
    },
];


const CARDS_FULL = [
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Green (350ML)',
        description: 'Our Raisin Elixir is a true embodiment of Persian heritage. Crafted with a recipe that has been cherished for generations, each bottle carries the legacy of traditional craftsmanship. We take pride in preserving the essence of Persian culture, making every sip a journey through time and tradition',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Green (100ML)',
        description: 'Our Raisin Elixir is a true embodiment of Persian heritage. Crafted with a recipe that has been cherished for generations, each bottle carries the legacy of traditional craftsmanship. We take pride in preserving the essence of Persian culture, making every sip a journey through time and tradition',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Blue (350ML)',
        description:
            " We believe that the best products are born from nature. That's why our Raisin Elixir contains only 100% natural ingredients. We carefully select the finest raisins, ensuring the absence of artificial additives. It's pure, wholesome, and a testament to our commitment to your well-being",
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Blue (100ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Red (350ML)',
        description:
            " We believe that the best products are born from nature. That's why our Raisin Elixir contains only 100% natural ingRedients. We carefully select the finest raisins, ensuring the absence of artificial additives. It's pure, wholesome, and a testament to our commitment to your well-being",
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Pure Raisin Elixir',
        subTitle: 'Red (100ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Blue (350ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Blue (100ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Red (350ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
    {
        image: ' /assets/images/home/for_designer.png',
        title: 'Cinnamon Raisin Elixir',
        subTitle: 'Red (100ML)',
        description: 'Quality is our hallmark. Our Raisin Elixir is a product of meticulous care and precision. With each batch, we deliver a rich and velvety elixir that stands out for its exceptional quality. From the selection of ingredients to the crafting process, we ensure that your experience is unparalleled',
    },
];


export default function HomeForProduct() {
    return (
        <StyledRoot>
            <Container component={MotionViewport}>
                <Stack
                    spacing={3}
                    sx={{
                        textAlign: 'center',
                        mb: { xs: 5, md: 10 },
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <m.div variants={varFade().inDown}>
                        <Typography variant="h3">
                            Best Seller
                        </Typography>
                    </m.div>
                </Stack>

                <Box
                    gap={{ xs: 3, lg: 10 }}
                    display="grid"
                    alignItems="center"
                    justifyItems='center'
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }}
                >
                    {CARDS.map((card, index) => (
                        <m.div variants={varFade().inUp} key={card.title}>
                            <CardComponent
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

                                image={card.image}
                                title={card.title}
                                subTitle={card.subTitle}
                                description={card.description}
                                btnLeftTitle={'Read More'}
                            />

                        </m.div>
                    ))}
                </Box>
            </Container>
        </StyledRoot>

    )
}

