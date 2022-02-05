export default function IngredientsMenu({ onAdd, ingredients }) {
  const is6Cheese = ingredients.filter((ing) => ing === "cheese").length === 6;

  return (
    <section className="ingredients-menu">
      <h2>ingredients menu</h2>
      <button onClick={onAdd("tomato")}>tomato</button>
      <button disabled={is6Cheese} onClick={onAdd("cheese")}>
        cheese
      </button>
      <button onClick={onAdd("lettuce")}>lettuce</button>
      <button onClick={onAdd("bun")}>bun</button>
    </section>
  );
}
