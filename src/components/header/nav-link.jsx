import CardTravelIcon from "@mui/icons-material/CardTravel";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HouseIcon from "@mui/icons-material/House";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navigationLinks = [
  {
    name: "Travel",
    path: "/",
    icon: <CardTravelIcon />,
  },
  { name: "Explore", path: "/explore", icon: <TravelExploreIcon /> },
  { name: "Flights", path: "/flights", icon: <FlightIcon /> },
  { name: "Hotels", path: "/hotels", icon: <HotelIcon /> },
  { name: "Holiday rentals", path: "/holiday", icon: <HouseIcon /> },
];

export default function NavLinks() {
  const location = useLocation();
  return (
    <Box gap={1.5} sx={{ display: "flex" }}>
      {navigationLinks.map((item, index) => (
        <Box
          key={index}
          component={Link}
          to={item.path}
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "32px",
            border: "1px solid #ccc",
            px: "24px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "lightblue",
            },
            textDecoration: "none",
            backgroundColor:
              location.pathname === item.path ? "#4285F4" : "transparent",
          }}
        >
          <Box sx={{ color: "blue " }}>{item.icon}</Box>
          <Typography color="black" fontSize={"16px"} fontWeight={"bold"}>
            {item.name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
