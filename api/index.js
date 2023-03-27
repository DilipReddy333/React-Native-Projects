import axios from "axios";

export const getPlacesData = async (lat, lon, type) => {
  const searchType = type ? type : "restaurants";
  try {
    // console.log(lat, lon, type);
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${searchType}/list-by-latlng`,
      {
        headers: {
          "X-RapidAPI-Key":
            "Your Key",
          "X-RapidAPI-Host": "host name",
        },
        params: {
          latitude: lat ? lat : "25.251557",
          longitude: lon ? lon : "51.564826",
          limit: "14",
          currency: "USD",
          distance: "10",
          lunit: "km",
          lang: "en_US",
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};

export const getLatLon = async (place) => {
  const data = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=your app id`
  );
  return data;
};
