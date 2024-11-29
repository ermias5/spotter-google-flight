import axios from "axios";

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
      "x-rapidapi-key": "060bf16361mshf18ba16cbd61526p1ab5b9jsnc9b4f11ba0d5",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.get(apiUrl, options);

    // Return the current airport and nearby airports
    return data;
  } catch (error) {
    console.error("Error fetching nearby airports:", error);
    return null;
  }
};

export const searchAirports = async () => {
  const apiUrl = import.meta.env.VITE_API_URL_SEARCH_AIRPORTS;

  const options = {
    method: "GET",
    params: {
      query: "new",
      locale: "en-US",
    },
    headers: {
      "x-rapidapi-key": "060bf16361mshf18ba16cbd61526p1ab5b9jsnc9b4f11ba0d5",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.get(apiUrl, options);
    return data;
  } catch (error) {
    console.error("Error searching flights:", error);
    return null;
  }
};

export const searchFlightsEveryWhere = async ({
  departure,
  cabinClass,
  flightType,
}) => {
  const apiUrl = import.meta.env.VITE_API_URL_SEARCH_AIRPORTSEVERYWHERE;

  const options = {
    method: "GET",
    params: {
      originEntityId: departure.value,
      cabinClass: cabinClass.toLowerCase(),
      journeyType: flightType.toLowerCase(),
      currency: "USD",
    },
    headers: {
      "x-rapidapi-key": "060bf16361mshf18ba16cbd61526p1ab5b9jsnc9b4f11ba0d5",
      "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
    },
  };

  try {
    const { data } = await axios.request(apiUrl, options);
    console.log(`flight response ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error("Error searching flights:", error);
    return null;
  }
};
