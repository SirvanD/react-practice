import "./App.css";
import { useState } from "react";

function App() {
  let [ingredients, setIngredients] = useState([]);

  const handleAddTomato = () => {
    //do not directly mutate state
    // always make a copy of the data your'e working with
    // let newArr = [...ingredients, "tomato"]; // this is a shallow clone - new array creation line
    setIngredients(["tomato", ...ingredients]);
  };

  const handleAddCheese = () => {
    setIngredients(["cheese", ...ingredients]);
  };
  const handleAddLettuce = () => {
    setIngredients(["lettuce", ...ingredients]);
  };

  const handleRemove = (targetIdx) => {
    // let index = 1;

    setIngredients(ingredients.filter((ing, idx) => idx !== targetIdx));
  };

  // let ingredients = ["tomato", "cheese", "lettuce"];

  return (
    <div className="App">
      <header>
        <button>publish</button>
      </header>
      <section className="ingredients-menu">
        <h2>ingredients menu</h2>
        <button onClick={handleAddTomato}>tomato</button>
        <button onClick={handleAddCheese}>cheese</button>
        <button onClick={handleAddLettuce}>onion</button>
      </section>

      <section className="burger-wrapper">
        <h2>burger</h2>
        {ingredients.map((ing, idx) => (
          <div
            key={idx} //to get rid of that warning in browser: every child should have a unique key name
            onClick={() => handleRemove(idx)}
            className={`ingredient ${ing}`}
          >
            {ing}
          </div>
          <div>{ingredients.filter(ing=>ing ==='cheese').length}</div>
        ))}
      </section>
    </div>
  );
}

export default App;

// function add(a, b) {
//   return a + b;
// }

// btn.addEventListener("click", () => add(1, 2));
