//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const GIGASECOND_IN_MS = 10**12;

export const gigasecond = (startDate) => {
  var startTime = startDate.getTime();
  var endDate = new Date(startTime + GIGASECOND_IN_MS);
  return endDate;
}
  
  
