const map = new Map([
  ["a", 1],
  ["b", 2],
]); // ['key', vlaue ]

map.set("c", 3); // to add new value
map.delete("c"); //to delete
map.clear(); // to delete all the pair

console.log(map.has("a")); // check a key exists in the map
console.log(map.size);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
