function fotmatData(data) {
  let output = "",
    oneHour = 60 * 60,
    oneMiute = 60,
    hours = 0,
    minuts = 0;

  if (data > oneHour) {
    hours = Math.floor(data / oneHour);
  }
  if (data > oneMiute) {
    minuts = Math.floor((data - hours * oneHour) / oneMiute);
  }
  seconds = data - hours * oneHour - minuts * oneMiute;

  hours > 0 ? (hours = hours + " godz. ") : (hours = "");
  minuts > 0 ? (minuts = minuts + " min. ") : (minuts = "");

  return hours + minuts + seconds + " sek.";
}

exports.print = fotmatData;
