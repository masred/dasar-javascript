const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/

console.log(...favorites);

/* output
Seafood Salad Nugget Soup
*/

console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const allFavoritesSpread = [...favorites, ...others];

console.log(allFavoritesSpread);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
