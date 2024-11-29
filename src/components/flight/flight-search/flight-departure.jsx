/* eslint-disable react/prop-types */
import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getNearByAirports } from "../../../api";

export default function FlightDeparture({ onChange }) {
  const [nearByAirports, setNearByAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);

  useEffect(() => {
    getNearByAirports().then((response) => {
      if (response?.status && response?.data) {
        const { current, nearby } = response.data;

        const formattedCurrentAirport = {
          label: `${current.presentation.title} (${current.navigation.relevantFlightParams.skyId})`,
          value: current.navigation.entityId,
        };
        const formattedNearbyAirports = nearby.map((airport) => ({
          label: `${airport.presentation.title} (${airport.navigation.relevantFlightParams.skyId})`,
          value: airport.navigation.entityId,
        }));
        setSelectedAirport(formattedCurrentAirport);
        const allAirports = [
          formattedCurrentAirport,
          ...formattedNearbyAirports,
        ];
        setNearByAirports(allAirports);
      } else {
        console.log("No data found for nearby airports");
      }
    });
  }, []);

  const handleSelectionChange = (event, newValue) => {
    setSelectedAirport(newValue);
    if (onChange) {
      onChange(newValue); // Notify parent about the change
    }
  };

  return (
    <>
      <Autocomplete
        options={nearByAirports}
        value={selectedAirport}
        onChange={handleSelectionChange}
        sx={{
          width: { xs: "100%", sm: "200px", md: "300px" },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={"Departure Location"}
            sx={{
              display: "flex",
              "& .MuiInputBase-root": {
                height: "100%",

                fontSize: { xs: "12px", sm: "24px" },
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
