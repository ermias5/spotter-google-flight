/* eslint-disable react/prop-types */
import { useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";

export default function FlightCalendar({ onChange }) {
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleReturnDate = (newValue) => {
    setReturnDate(newValue);
    if (onChange) {
      onChange({ from: newValue, to: returnDate });
    }
  };

  const handleDepartureChange = (newValue) => {
    setDepartureDate(newValue);
    if (onChange) {
      onChange({ from: departureDate, to: newValue });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Departure"
        value={departureDate}
        onChange={handleDepartureChange}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Departure"
            sx={{
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "20px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "32px",
              },
            }}
          />
        )}
      />
      <DatePicker
        label="Return"
        value={returnDate}
        onChange={handleReturnDate}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Return"
            sx={{
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "24px",
              },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
