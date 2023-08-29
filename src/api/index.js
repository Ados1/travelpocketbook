import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "f6ffcfed46msh573a01124fae6fap159971jsn7f2e86aee179",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://open-weather-map27.p.rapidapi.com/weather",

      {
        params: { lon: lng, lat: lat },
        headers: {
          "X-RapidAPI-Key":
            "f6ffcfed46msh573a01124fae6fap159971jsn7f2e86aee179",
          "X-RapidAPI-Host": "open-weather-map27.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
