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
            "6289075925mshcd0fe7e4a37c172p18dbd1jsn766d28968340",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
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
    `http://api.openweathermap.org/geo/1.0/direct?q=${place}&limit=1&appid=6df8be2ec1a7b1bf4253d871ca48b9ea`
  );
  return data;
};
