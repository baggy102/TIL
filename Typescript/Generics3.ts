interface User1 {
  name: string;
  age: number;
}

interface Car2 {
  name: string;
  color: string;
}

interface Book1 {
  price: number;
}

const user1: User1 = { name: "a", age: 10 };
const car: Car2 = { name: "bmw", color: "red" };
const book1: Book1 = { price: 3000 };

function showName<T extends { name: string }>(data: T): string {
  return data.name;
}

showName(user);
showName(car);
// showName(book);
