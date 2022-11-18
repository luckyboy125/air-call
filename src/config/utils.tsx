export const dateConvert = (timeStamp: any) => {
  const time = new Date(timeStamp * 1000);
  const Month = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return {
    date:
      Month[time.getMonth()] + ", " + time.getDate() + " " + time.getFullYear(),
    time:
      (
        "0" + (time.getHours() > 12 ? time.getHours() - 12 : time.getHours())
      ).slice(-2) +
      ":" +
      ("0" + time.getMinutes()).slice(-2),
    day: time.getHours() >= 12 ? "PM" : "AM",
  };
};
