const sortingHat = () => {
  const houses = ['gryffindor', 'slytherin', 'hufflepuff', 'ravenclaw'];
  const randomHouse = houses[Math.floor(Math.random() * houses.length)];
  return randomHouse;
};

export default sortingHat;
