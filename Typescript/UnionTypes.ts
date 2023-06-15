// Union types

// interface Car {
//   name: "car";
//   color: string;
//   start(): void;
// }

interface Mobile {
  name: "mobile";
  color: string;
  call(): void;
}

// function getGift(gift: Car | Mobile) {
//     console.log(gift.color);
//     gift.start();
// }
// Property 'start' does not exist on type 'Car | Mobile'.
// Property 'start' does not exist on type 'Mobile'

// 식별 가능한 union type
// function getGift(gift: Car | Mobile) {
//   console.log(gift.color);
//   if (gift.name === "car") {
//     gift.start();
//   } else {
//     gift.call();
//   }
// }
