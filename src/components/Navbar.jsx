import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillTelephoneFill } from "react-icons/bs";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logo from "../assets/images/freelancery-logo.png";
import logoBlack from "../assets/images/freelancery-logo-black.png";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "Services", "About", "Contact", "Blogs"];

function DrawerAppBar(props) {
  const { window, url } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={logoBlack} alt="" height={30} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) =>
          url !== item ? (
            <Link key={i} to={`/${item.toLowerCase()}`}>
              <Button size="large" color="error" fullWidth>
                {item}
              </Button>
            </Link>
          ) : null
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <GiHamburgerMenu />
          </IconButton>

          <Typography
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                sm: "block",
              },
            }}
          >
            <img src={logo} alt="" height={40} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) =>
              url !== item ? (
                <Link key={i} to={`/${item.toLowerCase()}`}>
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                </Link>
              ) : null
            )}
          </Box>
          <Button
            sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            variant="contained"
            href="tel:+923002001270"
            size="large"
          >
            <BsFillTelephoneFill /> &nbsp; +92 300 2001270
          </Button>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
