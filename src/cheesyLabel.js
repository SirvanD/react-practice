export default function cheesyLabel(ingredients) {
  let count = ingredients.filter((ing) => ing === "cheese").length;
  let cheeseObj = {
    1: "one",
    2: "double",
    3: "triple",
    4: "quadruple",
    5: "quintuple",
    6: "maximum",
  };
  return cheeseObj[count];
}
