const getSum = (x, y) => {
  return x + y;
};

const getProduct = (x, y, z) => {
  return x * y * z;
};

const checkOddOrEven = (num) => {
  let remainder = num % 2;

  let result;

  console.log(result);

  if (remainder === 0) {
    result = "even";
  } else {
    result = "odd";
  }

  return result;
};

export { getSum, getProduct, checkOddOrEven };
