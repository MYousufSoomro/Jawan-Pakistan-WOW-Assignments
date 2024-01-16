import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Grid, Stack } from "@mui/material";
import { AiTwotoneDelete } from "react-icons/ai";
import { SiHellofresh } from "react-icons/si";
import { FcMultipleCameras } from "react-icons/fc";
import ImgMediaCard from "./ImgMediaCard";
import ImageSlider from "./ImageSlider";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <SiHellofresh size={50} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const productsData = [
    {
      imageURL: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg",
      title:
        "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 4633,
      originalPrice: 5099,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg",
      title:
        "Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
      rating: 4.2,
      sold: 532,
      discPrice: 20,
      originalPrice: 80,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg",
      title: "Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
      rating: 4.2,
      sold: 532,
      discPrice: 59,
      originalPrice: 69,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686205684/N50867004A_1.jpg",
      title:
        "iPad 2021 (9th Generation) 10.2-Inch, 64GB, WiFi, Space Gray With Facetime - International Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1070,
      originalPrice: 1399,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg",
      title:
        "iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1950,
      originalPrice: 2700,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg",
      title:
        "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 4633,
      originalPrice: 5099,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg",
      title:
        "Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
      rating: 4.2,
      sold: 532,
      discPrice: 20,
      originalPrice: 80,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg",
      title: "Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
      rating: 4.2,
      sold: 532,
      discPrice: 59,
      originalPrice: 69,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686205684/N50867004A_1.jpg",
      title:
        "iPad 2021 (9th Generation) 10.2-Inch, 64GB, WiFi, Space Gray With Facetime - International Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1070,
      originalPrice: 1399,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg",
      title:
        "iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1950,
      originalPrice: 2700,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686132022/N53346840A_1.jpg",
      title:
        "iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 4633,
      originalPrice: 5099,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1663322644/N43241184A_1.jpg",
      title:
        "Bluetooth Full Touch Call Smartwatch With Replaceable Strap Black",
      rating: 4.2,
      sold: 532,
      discPrice: 20,
      originalPrice: 80,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1680513490/N46554630A_2.jpg",
      title: "Unlimited Double Touch Liquid Lip Colour 103 Natural Rose",
      rating: 4.2,
      sold: 532,
      discPrice: 59,
      originalPrice: 69,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686205684/N50867004A_1.jpg",
      title:
        "iPad 2021 (9th Generation) 10.2-Inch, 64GB, WiFi, Space Gray With Facetime - International Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1070,
      originalPrice: 1399,
    },
    {
      imageURL: "https://f.nooncdn.com/p/v1686663857/N41247610A_1.jpg",
      title:
        "iPhone 11 White 128GB 4G LTE (2020 - Slim Packing) - Middle East Version",
      rating: 4.2,
      sold: 532,
      discPrice: 1950,
      originalPrice: 2700,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <SiHellofresh size={50} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <ImageSlider />
        <Grid container gap={2}>
          {productsData.map((product, ind) => {
            return (
              <Grid key={ind} item>
                <ImgMediaCard data={product} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
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
