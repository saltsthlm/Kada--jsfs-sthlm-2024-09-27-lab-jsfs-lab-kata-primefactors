export const checkNumber =  (n: number | string) => {
  if(typeof n === "string") return  { result: [], message: "Please enter a valid number. Try again"};
  if (n < 0) return {result: [], message: "Please enter a valid number. Try again"}
  return {
    result: primeFactors(n),
    message: 'Your result was successful'
  };
};

const primeFactors = (n: number) => {
  const factors: number[] = [];
  let divisor = 2;

  while (n >= 2) {
      if (n % divisor === 0) {
          factors.push(divisor);
          n = n / divisor;
      } else {
          divisor++;
      }
  }

  return factors;
};
