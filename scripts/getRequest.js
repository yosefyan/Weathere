import determineColor from "./determineColor.js";

const getData = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a6582dc52ab7043d6e8c61d2cb29752&units=metric`
    );
    setTimeout(() => {
      determineColor();
    }, 100);
    return res;
  } catch (error) {}
};

export default getData;
