require('./connection');

const Car = require('./model/Cars');

const getCars = async () => {
  // El auto más caro
  const mostExpensive = await Car.find().sort({ price: 'descending' }).limit(1);

  // El auto mas viejo
  const oldestCar = await Car.find().sort('model').limit(1);

  // Los autos que comienzan en su patente con X valor (Patentes que empiezan con 'A')
  const firstLetter = await Car.find({ patent: /^a/i });

  // Los autos que superen determinado monto
  const minPrice = await Car.find().where('price').gt(90000);

  // Los autos con seguro
  const carWithInsunrance = await Car.find({ insurance: true });

  console.log(
    mostExpensive,
    oldestCar,
    firstLetter,
    minPrice,
    carWithInsunrance
  );
};

getCars();
