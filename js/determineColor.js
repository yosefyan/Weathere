import getUsersCurrentDate from "./getUsersDate.js";
import { selectorAll } from "./selector.js";
const determineColor = () => {
  const gradientText = selectorAll(".gradientText");
  gradientText.forEach((grad) => {
    let phase = getUsersCurrentDate().src;

    grad.classList.add(
      phase.includes("morning")
        ? "morningColor"
        : phase.includes("afternoon")
        ? "afternoonColor"
        : phase.includes("evening")
        ? "eveningColor"
        : phase.includes("night")
        ? "nightColor"
        : ""
    );
  });
};

export default determineColor;
