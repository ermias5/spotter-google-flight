import axios from "axios";

export const searchAirports = async () => {
  const apiUrl = import.meta.env.VITE_API_URL_SEARCH_AIRPORTS;

  const options = {
    method: "GET",
    params: {
      query: "new",
      locale: "en-US",
    },
    headers: {
      "x-rapidapi-key": "7a65c447e3mshe04f7ff0fb26729p1b856ajsn6e54ed6f652f",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.get(apiUrl, options);
    console.log("API Response Data for search airports:", data);
    return data;
  } catch (error) {
    console.error("Error searching flights:", error);
    return null;
  }
};

export const getNearByAirports = async () => {
  const apiUrl = import.meta.env.VITE_API_URL_NEARBY_AIRPORT;

  const options = {
    method: "GET",
    params: {
      lat: "9.0035", // Latitude for Addis Ababa
      lng: "38.7477", // Longitude for Addis Ababa
      locale: "en-US",
    },
    headers: {
      "x-rapidapi-key": "7a65c447e3mshe04f7ff0fb26729p1b856ajsn6e54ed6f652f",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.get(apiUrl, options);
    console.log("API Response Data near by airports:", data);

    // Return the current airport and nearby airports
    return data;
  } catch (error) {
    console.error("Error fetching nearby airports:", error);
    return null;
  }
};
