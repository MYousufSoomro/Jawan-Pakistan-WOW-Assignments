import { Box, Button, Grid, Stack, Toolbar, Typography } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lore.",
    url: "#",
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lore.",
    url: "#",
  },
  {
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lore.",
    url: "#",
  },
  {
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu lore.",
    url: "#",
  },
];

const Home = () => {
  return (
    <>
      <Navbar url="Home" />
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <HeroSection />
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <Grid
            className="animate__animated animate__slideInUp"
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Typography textAlign={"center"} fontWeight={"bolder"} variant="h3">
              Our Services
            </Typography>
          </Grid>

          {services.map((serv, ind) => {
            return (
              <Grid
                key={ind}
                className="animate__animated animate__slideInUp"
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={2}
              >
                <Typography color="primary" variant="h4">
                  {serv.title}
                </Typography>
                <Typography>{serv.description}</Typography>
                <Button sx={{ mt: 2, width: "100%" }} variant="outlined">
                  Learn more
                </Button>
              </Grid>
            );
          })}

          {/* <Grid
            className="animate__animated animate__backInLeft"
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
          >
            <Typography variant="h4">SEO</Typography>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Architecto beatae laborum ad exercitationem explicabo quibusdam
              tempore excepturi rerum vitae pariatur?
            </Typography>
            <Button sx={{ mt: 2, width: "100%" }} variant="outlined">
              Learn more
            </Button>
          </Grid> */}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
