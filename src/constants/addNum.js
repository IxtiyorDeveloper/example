export default function addNum(date) {
  if (date >= 10 || date === 0) {
    return date;
  }
  if (date < 10) {
    return "0" + date;
  }
}
