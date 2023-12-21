import determineColor from "./determineColor.js";
import getData from "./getRequest.js";
import getUsersCurrentDate from "./getUsersDate.js";
import { selector } from "./selector.js";

const input = selector("#theInput");

const currentPhase = selector("#currentPhase");
currentPhase.innerHTML = getUsersCurrentDate().greeting;
selector("#bgPicture").style.cssText = `background-image: url(${
  getUsersCurrentDate().src
});`;
const dataContainer = selector("#dataContainer");
input.addEventListener("input", async (e) => {
  try {
    const res = await getData(e.target.value);
    const { name, main, wind } = res?.data;
    const {
      feels_like,
      humidity,
      pressure,
      sea_level,
      temp,
      temp_max,
      temp_min,
    } = main;
    const { speed, deg } = wind;
    const dataArray = {
      name,
      speed,
      deg,
      feels_like,
      humidity,
      pressure,
      sea_level,
      temp,
      temp_max,
      temp_min,
    };

    const temps = ["temp", "temp_max", "temp_min", "feels_like"];

    const html = Object.entries(dataArray)
      .map(([key, value]) => {
        return `<li class="gradientText select-none text-6xl rounded-lg w-full transition-all duration-500 flex justify-evenly items-center hover:scale-125 p-4 text-center ${
          key === "name"
            ? "row-span-3 border-r-teal-200/25 border-r-4"
            : "flex-col-reverse border-2 border-teal-200/25"
        }"><span class="text-2xl ${key == "name" ? "hidden" : ""}">${
          key === "name" ? "" : key
        }</span> ${
          temps.includes(key)
            ? value + "°C"
            : key === "humidity"
            ? value + "%"
            : key === "speed"
            ? value + " Km/h"
            : value || "N/A"
        }</li>`;
      })
      .join("");
    dataContainer.innerHTML = html;
  } catch (error) {}
});

determineColor();
