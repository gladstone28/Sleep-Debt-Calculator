const getSleepHours = (day) => {
  const hours = {
    monday: parseInt(document.getElementById('monday').value),
    tuesday: parseInt(document.getElementById('tuesday').value),
    wednesday: parseInt(document.getElementById('wednesday').value),
    thursday: parseInt(document.getElementById('thursday').value),
    friday: parseInt(document.getElementById('friday').value),
    saturday: parseInt(document.getElementById('saturday').value),
    sunday: parseInt(document.getElementById('sunday').value)
  };
  return hours[day.toLowerCase()] || "Error!";
};

const getActualSleepHours = () => 
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const resultDiv = document.getElementById('result');
  
  if (actualSleepHours === idealSleepHours) {
    resultDiv.innerHTML = "You got the perfect amount of sleep hours.";
  } else if (actualSleepHours > idealSleepHours) {
    resultDiv.innerHTML = "You sleep too much.";
  } else {
    resultDiv.innerHTML = "You are not sleeping enough. You got " + 
      (idealSleepHours - actualSleepHours) + 
      " hour(s) less sleep than you needed this week. Get some rest.";
  }
};
