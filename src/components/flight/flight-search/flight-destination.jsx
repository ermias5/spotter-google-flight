import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { searchAirports } from "../../../api";

export default function FlightDestination() {
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);

  useEffect(() => {
    searchAirports().then((response) => {
      const airports = response.data;

      const airportList = airports.map((airport) => ({
        label: `${airport.presentation.title} (${airport.navigation.relevantFlightParams.skyId})`,
        value: airport.navigation.relevantFlightParams.skyId,
      }));

      setAirports(airportList);
    });
  }, []);

  const handleSelectionChange = (event, newValue) => {
    setSelectedAirport(newValue);
  };

  return (
    <>
      <Autocomplete
        options={airports}
        value={selectedAirport}
        onChange={handleSelectionChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="To Where?"
            sx={{
              "& .MuiInputBase-root": {
                height: "100%",
                width: "300px",

                fontSize: { xs: "12px", sm: "32px" },
              },
              "& .MuiSvgIcon-root": {
                fontSize: "20px",
              },
            }}
          />
        )}
      />
    </>
  );
}
