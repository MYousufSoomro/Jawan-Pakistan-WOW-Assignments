import { Grid, Typography } from "@mui/material";
import logoWhite from "../assets/images/freelancery-logo.png";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Grid
      sx={{ backgroundColor: "#000", color: "#fff" }}
      container
      direction="row"
      alignItems="center"
    >
      <Grid
        className="animate__animated animate__backInLeft"
        item
        padding={3}
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
      >
        <img src={logoWhite} alt="freelancery logo" width="300px" />
        <Typography variant="h6">About Us</Typography>
        <Typography color={"grey"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est
          ducimus ullam enim saepe voluptatem dolorum voluptatum, facere vel
          corrupti, quasi nobis inventore, culpa doloremque tempore vitae quam.
          Molestiae, odio?
        </Typography>
        <Typography mt={1}>
          <FaFacebook style={{ marginRight: 5 }} size={25} />{" "}
          <FaTwitter style={{ marginRight: 5 }} size={25} />{" "}
          <FaInstagram style={{ marginRight: 5 }} size={25} />{" "}
          <FaYoutube style={{ marginRight: 5 }} size={25} />
        </Typography>
      </Grid>
      <Grid
        className="animate__animated animate__backInLeft"
        item
        padding={3}
        xs={12}
        sm={6}
        md={6}
        lg={6}
        xl={6}
      >
        <Typography variant="h6">Useful Links</Typography>
        <ul>
          <li>Best video editors in Pakistan</li>
          <li>Best seo service providers in Pakistan</li>
          <li>Top Digital Marketing Agencies in Pakistan</li>
          <li>Content Writing Services</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default Footer;
