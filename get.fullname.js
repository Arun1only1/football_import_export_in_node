const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const sayHello = () => {
  console.log("hello");
};

export default getFullName;
export { sayHello };

// only one thing can be exported using default export
