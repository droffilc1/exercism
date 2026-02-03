//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  const factors = {
    Pling: 3,
    Plang: 5,
    Plong: 7,
  };
  const drops = Object.keys(factors)
  .filter(key => number % factors[key] === 0)
  .join('');
  return drops || number.toString();
};
