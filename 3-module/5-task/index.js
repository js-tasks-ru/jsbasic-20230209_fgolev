function getMinMax(str) {
  let newArr = str
   .split(" ")
   .filter(item => +item);
  return {
    min: Math.min.apply(null, newArr),
    max: Math.max.apply(null, newArr),
  };
}