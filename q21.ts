//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/
let cars = [
    {
      made: "civic",
      model: "Cultus",
      colour: "black",
    },
  ];
  console.log(cars);
  
  // adding new car in cars:
  let arrayOfCars: Array<typeof cars> = [];
  arrayOfCars.push(cars);
  
  let range= [
    {
      made: "range",
      model: "rovers",
      colour: "black",
    },
  ];
  arrayOfCars.push(range);
  console.log(cars);