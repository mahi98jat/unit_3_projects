async function getFood(url) {
  let res = await fetch(url);
  var food = await res.json();
  return food;
}
function appendFood({ meals: [{ strMealThumb, strCategory }] }, parent) {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = strMealThumb;
  let p = document.createElement("p");
  p.innerText = strCategory;
  div.append(image, p);
  parent.append(div);
}
// function appendFoodHome({ meals }, parent) {
//   console.log(meals);
//   //   let div = document.createElement("div");
//   //   let image = document.createElement("img");
//   //   image.src = strMealThumb;
//   //   let p = document.createElement("p");
//   //   p.innerText = strCategory;
//   //   div.append(image, p);
//   //   parent.append(div);
// }
export { getFood, appendFood};
