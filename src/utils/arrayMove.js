export function arrayMove(array, from, to) {
  const newArray = array.slice();
  newArray.splice(
    to < 0 ? newArray.length + to : to,
    0,
    newArray.splice(from, 1)[0] //First run => change array
  ); //Second run

  return newArray;
}
