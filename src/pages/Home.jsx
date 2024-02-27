import { Alert, Box, Collapse, Container, IconButton } from "@mui/material";
import MediaCard from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getDataFromFakeStoreAPI();
    checkAuth();
  }, []);

  const navigate = useNavigate();
  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUserName(user.email);

        // ...
      } else {
        // User is signed out
        // ...
        console.log("User is not signed");
        navigate("/login");
      }
    });
  };

  const getDataFromFakeStoreAPI = () => {
    const data = axios.get("https://fakestoreapi.com/products");
    data.then((response) => {
      // console.log(response.data);
      setProducts(response.data);
    });
  };

  return (
    <Container sx={{ mt: 5 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {/* <MediaCard /> */}

        <Box sx={{ width: "100%" }}>
          <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Welcome, <strong>{userName}</strong>!
            </Alert>
          </Collapse>
        </Box>

        {products.map((product, i) => {
          return (
            <MediaCard
              key={i}
              image={product.image}
              title={product.title}
              desc={product.description}
              url={`productDetails/${product.id}`}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Home;
