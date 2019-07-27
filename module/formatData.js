function fotmatData(data) {
  let sec_num = parseInt(data),
    hours = Math.floor(sec_num / 3600),
    minutes = Math.floor((sec_num - hours * 3600) / 60),
    seconds = sec_num - hours * 3600 - minutes * 60;

  return hours + " godz. " + minutes + " min. " + seconds + " sec.";
}

exports.print = fotmatData;
