import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  return (
    <AppBar sx={{}}>
      <Container>
        <Toolbar disableGutters></Toolbar>
      </Container>
    </AppBar>
  );
}
