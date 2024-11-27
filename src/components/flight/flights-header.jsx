import { Box, Typography } from "@mui/material";

export default function FlightsHeader() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <img
          src="https://www.gstatic.com/travel-frontend/animation/hero/flights_nc_4.svg"
          alt="image"
        />
        <Typography variant="h2">Flights</Typography>
      </Box>
    </>
  );
}
