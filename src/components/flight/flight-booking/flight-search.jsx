import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function FlightSearch() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "16px",
        borderRadius: "8px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5)",
        backgroundColor: "#fff",
        maxWidth: "1300px",
        mx: "auto",
        mt: "50px",
        pb: "70px",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
      </Box>

      <Stack display={"flex"} flexDirection={"row"} gap={5}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            flexGrow: 1,
          }}
        >
          <TextField
            variant="outlined"
            defaultValue="Addis Ababa"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SwapHorizIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: "300px",
              height: "80px",
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "20px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "32px",
              },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Where to?"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              width: "300px",
              height: "80px",
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "20px",
              },
              "& .MuiSvgIcon-root": {
                fontSize: "32px",
              },
            }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "8px" }}>
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
              width: "300px",
              height: "80px",
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "20px",
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
              width: "300px",
              height: "80px",
              "& .MuiInputBase-root": {
                height: "100%",
                fontSize: "20px",
              },
            }}
          />
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
