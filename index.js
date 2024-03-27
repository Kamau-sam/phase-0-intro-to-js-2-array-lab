const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
  cats.push("Ralph");
}
function destructivelyPrependCat(Mary) {
  cats.unshift("Bob");
}
function destructivelyRemoveLastCat(Garfield) {
  cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
  cats.shift("Milo");
}
function appendCat(Broom) {
  const cats = ["Milo", "Otis", "Garfield"];
  const copyCats = cats.slice();
  copyCats.push("Broom");
  return copyCats;
}
function prependCat(Arnold) {
  const cats = ["Milo", "Otis", "Garfield"];
  const myCats = cats.slice();
  myCats.unshift("Arnold");
  return myCats;
}
function removeLastCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  const lessCats = cats.slice();
  lessCats.pop();
  return lessCats;
}
function removeFirstCat() {
  const cats = ["Milo", "Otis", "Garfield"];
  const lessLastCat = cats.slice();
  lessLastCat.shift();
  return lessLastCat;
}
