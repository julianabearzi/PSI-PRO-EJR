require('./connection');

const Car = require('./model/Cars');

const createCar = async () => {
  const carOne = new Car({
    brand: 'Ford',
    patent: 'AC 042 UZ',
    model: 2021,
    price: 95000.99,
    insurance: true,
  });
  await carOne.save();

  const carTwo = new Car({
    brand: 'Renault',
    patent: 'AA 826 XZ',
    model: 2020,
    price: 75000,
    insurance: false,
  });
  await carTwo.save();

  const carThree = new Car({
    brand: 'Toyota',
    patent: 'AA 123 CD',
    model: 2018,
    price: 55000.5,
    insurance: true,
  });
  await carThree.save();

  const carFour = new Car({
    brand: 'Ford',
    patent: 'CA 611 KP',
    model: 2021,
    price: 155000.5,
    insurance: false,
  });
  await carFour.save();

  const carFive = new Car({
    brand: 'Chevrolet',
    patent: 'BC 123 AD',
    model: 2020,
    price: 90000,
    insurance: true,
  });
  await carFive.save();
};

createCar();
