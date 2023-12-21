const getUsersCurrentDate = () => {
  const now = new Date();
  const hour = now.getHours();
  let greeting;
  let src = `../assets/`;
  if (hour >= 5 && hour < 12) {
    greeting = `<i class="fa-solid fa-mug-saucer"></i> Good Morning`;
    src += "morning.jpg";
  } else if (hour >= 12 && hour < 18) {
    greeting = `<i class="fa-solid fa-cloud-sun"></i> Good Afternoon`;
    src += "afternoon.jpg";
  } else if (hour >= 18 || hour < 0) {
    greeting = `<i class="fa-solid fa-cloud-moon"></i> Good Evening`;
    src += "evening.jpg";
  } else {
    greeting = `<i class="fa-solid fa-star"></i> Good Night`;
    src += "night.jpg";
  }
  let data = {
    greeting,
    src,
  };
  return data;
};

export default getUsersCurrentDate;
