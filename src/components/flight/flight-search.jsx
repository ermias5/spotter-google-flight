import { Box, Button, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FlightDeparture from "./flight-search/flight-departure";
import FlightType from "./flight-search/flight-type";
import FlightDestination from "./flight-search/flight-destination";
import FlightCalendar from "./flight-search/flight-calendar";

export default function FlightSearch() {
  return (
    <Box
      gap={{ xs: 5, sm: 5 }}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#fff",
        mx: "auto",
        mt: "50px",
        pb: "70px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FlightType />
      </Box>

      <Stack
        display={"flex"}
        flexDirection={{ xs: "column", sm: "row" }}
        gap={{ xs: 1, sm: 5 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <FlightDeparture />
          <FlightDestination />
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <FlightCalendar />
        </Box>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "200px",
          left: "500px",
          borderRadius: "30px",
          px: "32px",
          minWidth: "56px",
          height: "56px",
        }}
      >
        <SearchIcon />
        <Typography>Search</Typography>
      </Button>
    </Box>
  );
}
