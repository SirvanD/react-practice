//lifting state in react - parent is source of truth
// also called dumb component or stateless
//stateless component - they dont have to manage state-

export default function Burger({ ingredients, onRemove }) {
  return (
    <>
      {ingredients.map((ing, idx) => (
        <div
          key={idx}
          //to get rid of that warning in browser: every child should have a unique key name
          onClick={() => onRemove(idx)}
          className={`ingredient ${ing}`}
        >
          {ing}
        </div>
      ))}
    </>
  );
}
