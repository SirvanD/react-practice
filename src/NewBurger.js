import "./App.css";
import { useState } from "react";
import TopNav from "./TopNav";
import Burger from "./Burger";
import IngredientsMenu from "./IngredientsMenu";

function NewBurger() {
  let [ingredients, setIngredients] = useState([]);
  const add = (ingredientName) => {
    //this creates a function and return it to where it's called, interesting!
    return () => setIngredients([ingredientName, ...ingredients]);
  };

  const remove = (targetIdx) => {
    // let index = 1;

    setIngredients(ingredients.filter((ing, idx) => idx !== targetIdx));
  };

  // let ingredients = ["tomato", "cheese", "lettuce"];

  const cheesyLabel = (ingredients) => {
    let count = ingredients.filter((ing) => ing === "cheese").length;
    let cheeseObj = {
      1: "one",
      2: "double",
      3: "triple",
      4: "quadruple",
      5: "quintuple",
      6: "maximum",
    };
    if (cheeseObj[count]) {
      return `${cheeseObj[count]} cheese`;
    } else return "";
  };

  let [showMenu, setShowMenu] = useState(true);
  const handleShow = () => setShowMenu(true);
  const handleHide = () => setShowMenu(false);

  const bestSeller = () =>
    setIngredients(["bun", "bun", "bun", "bun", "bun", "bun", ...ingredients]);

  return (
    <div className="App">
      <TopNav />
      <button onClick={bestSeller}>bestseller</button>
      <button onClick={handleShow}>show menu</button>
      <button onClick={handleHide}>hide menu</button>
      {showMenu && <IngredientsMenu onAdd={add} ingredients={ingredients} />}
      <section className="burger-wrapper">
        <h2>burger</h2>
        <Burger ingredients={ingredients} onRemove={remove} />
      </section>

      <div>{cheesyLabel(ingredients)}</div>
    </div>
  );
}

export default NewBurger;
