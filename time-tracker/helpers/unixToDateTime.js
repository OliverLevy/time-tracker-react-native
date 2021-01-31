export const unixToDateTime = (unix) => {
  const date = new Date(unix);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes.substr(
    -2
  )}:${seconds.substr(-2)}`;
};
