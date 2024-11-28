import { Container } from "@mui/material";
import FlightSearch from "../../components/flight/flight-search";
import FlightsHeader from "../../components/flight/flights-header";

export default function FlightsPage() {
  return (
    <>
      <FlightsHeader />
      <Container>
        <FlightSearch />
      </Container>
    </>
  );
}
