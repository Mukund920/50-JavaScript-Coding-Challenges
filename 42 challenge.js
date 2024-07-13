// create a function that will return a boolean value indicating if two circle defined by center coordinates and radius are intersecting

function areCircleIntersecting(x1, y1, radius1, x2, y2, radius2) {
  // calculate the distance between the centers of the circles
  const distanceBetweenCenter = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  // check if the distance is less than the sum of the redi
  const sumOfRadi = radius1 + radius2;

  // return true if intersecting, false otherwise
  return distanceBetweenCenter < sumOfRadi;
}

const circle1 = { x: 1, y: 2, radius: 3 };
const circle2 = { x: 4, y: 6, radius: 2 };
const intersecting = areCircleIntersecting(
  circle1.x,
  circle1.y,
  circle1.radius,
  circle2.x,
  circle2.y,
  circle2.radius
);

console.log("Intersecting:", intersecting);
