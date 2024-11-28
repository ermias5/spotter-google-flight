import { InputAdornment, MenuItem, Select } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function FlightType() {
  return (
    <>
      <Select defaultValue="Round trip" size="large">
        <MenuItem value="Round trip">Round trip</MenuItem>
        <MenuItem value="One way">One way</MenuItem>
        <MenuItem value="Multi-city">Multi-city</MenuItem>
      </Select>
      <Select
        defaultValue="1"
        sx={{
          display: "flex",
          "& .MuiSelect-icon": {
            right: "5px",
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        }
      >
        <MenuItem value="1">1</MenuItem>
        <MenuItem value="2">2</MenuItem>
        <MenuItem value="3">3</MenuItem>
      </Select>
      <Select defaultValue="Economy" size="large">
        <MenuItem value="Economy">Economy</MenuItem>
        <MenuItem value="Business">Business</MenuItem>
        <MenuItem value="First class">First class</MenuItem>
      </Select>
    </>
  );
}
