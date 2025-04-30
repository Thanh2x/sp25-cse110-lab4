let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (const keyas in statistics) {
    if (keyas[0] === "r" || statistics[keyas] % 2 != 0) {
        console.log('${statistics[keyas]}');
    }
}