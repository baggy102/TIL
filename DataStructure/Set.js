const set = new Set([1, 2, 3]);

set.add(4); // to add a new value
set.add(4); // to add duplicate value -> set ignore it (중복을 허용하지 않음)
set.delete(3); // to delete a value

console.log(set.has(4)); // to check a value exists in the set -> true

console.log(set.size); // check the number of items

set.clear; // to delete all values in the set

for (const item of set) [cosole.log(item)];
