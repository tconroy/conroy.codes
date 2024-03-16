// import Redis from "ioredis";
// import { NextResponse } from "next/server";
// import invariant from "tiny-invariant";

// invariant(process.env.REDIS_URL, "REDIS_URL must be defined.");
// invariant(process.env.WEATHER_API_TOKEN, "WEATHER_API_TOKEN must be defined.");
// const WEATHER_TOKEN = process.env.WEATHER_API_TOKEN;
// const redis = new Redis(process.env.REDIS_URL);

// type Weather = {
//   data: {
//     id: number;
//     main: string;
//     description: string;
//     icon: string;
//   };
// };

// const fetchCurrentWeather = async (): Promise<Weather["data"]> => {
//   const weatherApiUrl = new URL(
//     "https://api.openweathermap.org/data/2.5/weather"
//   );
//   weatherApiUrl.searchParams.set("lat", "40.718015676794096");
//   weatherApiUrl.searchParams.set("lon", "-74.04315769918419");
//   weatherApiUrl.searchParams.set("appid", WEATHER_TOKEN);

//   const res = await fetch(weatherApiUrl, {
//     cache: "no-cache",
//   });
//   const weather = (await res.json()).weather[0];
//   return weather;
// };

// const getDiffInHours = (currentWeather) => {
//   try {
//     const { timestampMS } = JSON.parse(currentWeather);
//     const diffInHours = (Date.now() - timestampMS) / 1000 / 60 / 60;
//     return diffInHours;
//   } catch (e) {
//     return true;
//   }
// };

// export const getWeather = async () => {
//   // check redis for the last hour
//   let currentWeather = await redis.get("currentWeather");
//   const shouldRefetch = getDiffInHours(currentWeather) > 1;

//   if (!shouldRefetch) {
//     return JSON.parse(currentWeather!);
//   }

//   // otherwise, refetch
//   const weatherData = await fetchCurrentWeather();
//   const now = Date.now();
//   const data = { ...weatherData, timestampMS: now };
//   await redis.set("currentWeather", JSON.stringify(data));
//   return data;
// };
