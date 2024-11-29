import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import SearchIcon from "@mui/icons-material/Search";
import FlightDeparture from "./flight-search/flight-departure";
import FlightType from "./flight-search/flight-type";
import FlightDestination from "./flight-search/flight-destination";
import FlightCalendar from "./flight-search/flight-calendar";
import { searchFlightsEveryWhere } from "../../api";

export default function FlightSearch() {
  const [departure, setDeparture] = useState(null);
  const [destination, setDestination] = useState(null);
  const [dates, setDates] = useState({ from: null, to: null });
  const [flightType, setFlightType] = useState("Round trip");
  const [passengers, setPassengers] = useState(1);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [flights, setFlights] = useState([]);

  const fetchFlights = async () => {
    if (!departure || !destination || !dates.from) {
      alert("Please fill all required fields!");
      return;
    }

    const flightData = await searchFlightsEveryWhere({
      departure,
      destination,
      cabinClass,
      flightType,
      dates,
      passengers,
    });

    if (flightData && flightData.status) {
      setFlights(flightData.data.results || []);
    } else {
      alert("Failed to fetch flights. Please try again later.");
    }
  };

  const handleSearch = () => {
    fetchFlights();
  };

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
        mb: "300px",
        pb: "70px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FlightType
          flightType={flightType}
          setFlightType={setFlightType}
          passengers={passengers}
          setPassengers={setPassengers}
          cabinClass={cabinClass}
          setCabinClass={setCabinClass}
        />
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
          <FlightDeparture onChange={(value) => setDeparture(value)} />
          <FlightDestination onChange={(value) => setDestination(value)} />
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <FlightCalendar onChange={(value) => setDates(value)} />
        </Box>
      </Stack>

      <Button
        variant="contained"
        color="primary"
        sx={{
          position: "absolute",
          top: "85%",
          left: { xs: "30%", sm: "50%" },
          borderRadius: "30px",
          px: "32px",
          minWidth: "56px",
          height: "56px",
        }}
        onClick={handleSearch}
      >
        <SearchIcon />
        <Typography>Search</Typography>
      </Button>

      {flights.length > 0 && (
        <Box sx={{ mt: 4, width: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Available Flights:
          </Typography>
          <Grid container spacing={3}>
            {flights.map((flight, index) => {
              const {
                content: {
                  location: { name },
                  flightQuotes: { cheapest },
                  image: { url },
                },
              } = flight;

              return (
                <Grid item={true} xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardMedia component="img" image={url} alt={name} />
                    <CardContent>
                      <Typography variant="h6">{name}</Typography>
                      <Typography>Price: {cheapest.price}</Typography>
                      <Typography>
                        Direct Flight: {cheapest.direct ? "Yes" : "No"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
