import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import { useAppSelector } from "../hooks";

function Header() {
  const appName = useAppSelector((state) => state.app.name);
  return (
    <AppBar>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="space-between"
          >
            <Box>
              <Button component={Link} color="inherit" to="/">
                <Typography variant="h6">{appName}</Typography>
              </Button>
            </Box>
            <Box>
              <Button component={Link} color="inherit" to="/">
                Home
              </Button>
              <Button component={Link} color="inherit" to="/about">
                About
              </Button>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
