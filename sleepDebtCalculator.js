
const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 8;
      break;
    case "saturday":
      return 7;
      break;
    case "sunday":
      return 8;
      break;
    default:
      return "Error!";
  }
};
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week
console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep hours");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("you sleep too much");
  } else {
    console.log("you are not sleeping enough");
  }
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

calculateSleepDebt();
