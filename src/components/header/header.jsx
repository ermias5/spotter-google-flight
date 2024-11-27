import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLinks from "./nav-link";

export default function Header() {
  const googleColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "white", p: "12px", zIndex: 1300 }}
    >
      <Toolbar className={""}>
        <Box display={"flex"} gap={10}>
          <Box display={"flex"} alignItems={"center"}>
            <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
            <Typography variant="h4">
              <Link
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: googleColors[0] }}>G</span>
                <span style={{ color: googleColors[1] }}>o</span>
                <span style={{ color: googleColors[2] }}>o</span>
                <span style={{ color: googleColors[0] }}>g</span>
                <span style={{ color: googleColors[3] }}>l</span>
                <span style={{ color: googleColors[1] }}>e</span>
              </Link>
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavLinks />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
