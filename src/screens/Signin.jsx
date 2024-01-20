import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Navbar url="Signin" />
      <Container sx={{ mt: 10 }}>
        <Typography variant="h2">Signin</Typography>
        <Stack sx={{ mt: 2 }} gap={2}>
          <Stack>
            <TextField label="Email" type="email" />
          </Stack>
          <Stack>
            <TextField label="Password" type="password" />
          </Stack>
          <Stack>
            <Link to="/">
              <Button variant="outlined" size="large" color="error">
                Sigin
              </Button>
            </Link>
          </Stack>
          <Stack>
            <Typography>
              Don't have an account? <Link to="/signup">Signup here</Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Signin;
