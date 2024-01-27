import { Button, Grid, Typography } from "@mui/material";
import image1 from "../assets/images/hero-section-img.webp";
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate();

  const ContactHandler = () => {
    console.log("first");
    navigate("/contact");
  };
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        className="animate__animated animate__backInLeft"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <Typography variant="h2">
          Best Digital Marketing Agency in <strong>Karachi, Pakistan</strong>
        </Typography>
        <Typography>
          Give your audience the ultimate brand experience. Our products and
          services empower companies to launch high-quality content strategies
          that build awareness and drive revenue.
        </Typography>
        <Grid gap={5} sx={{ mt: 3 }}>
          <Button sx={{ mr: 2 }} size="large" variant="outlined">
            Know more?
          </Button>
          <Button onClick={ContactHandler} size="large" variant="contained">
            Contact us
          </Button>
        </Grid>
      </Grid>
      <Grid
        className="animate__animated animate__backInRight"
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <img src={image1} width="100%" />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
