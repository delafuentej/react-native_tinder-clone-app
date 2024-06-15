// shuffleyArray => it picks a random element for each original array element, and excludes it
// from the next draw, like picking randomly from a deck of cards
export const shuffleyArray = array =>
array
.map(a => ({ sort: Math.random(), value: a}))
.sort((a, b) => a.sort - b.sort)
.map(a => a.value)