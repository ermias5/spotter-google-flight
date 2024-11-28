import { InputAdornment, TextField } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export default function FlightCalendar() {
  return (
    <>
      <TextField
        variant="outlined"
        placeholder="Departure"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <CalendarTodayIcon />
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiInputBase-root": {
            height: "100%",
            fontSize: "20 px",
          },
          "& .MuiSvgIcon-root": {
            fontSize: "32px",
          },
        }}
      />
      <TextField
        variant="outlined"
        placeholder="Return"
        sx={{
          "& .MuiInputBase-root": {
            height: "100%",
            fontSize: "20px",
          },
        }}
      />
    </>
  );
}
