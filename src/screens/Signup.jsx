import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar url="Signup" />
      <Container sx={{ mt: 10 }}>
        <Typography variant="h2">Signup</Typography>
        <Stack sx={{ mt: 2 }} gap={2}>
          <Stack>
            <TextField label="Name" type="text" />
          </Stack>
          <Stack>
            <TextField label="Email" type="email" />
          </Stack>
          <Stack>
            <TextField label="Password" type="password" />
          </Stack>
          <Stack>
            <Link to="/signin">
              <Button variant="outlined" size="large" color="error">
                Submit
              </Button>
            </Link>
          </Stack>
          <Stack>
            <Typography>
              Already have an account? <Link to="/signin">Signin here</Link>
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Signup;
