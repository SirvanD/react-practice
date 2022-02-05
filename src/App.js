import "./App.css";
import NewBurger from "./NewBurger";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function About() {
  return (
    <section>
      <h1>about us</h1>
      <p>we are forking legends</p>
    </section>
  );
}

function Home() {
  return (
    <section>
      <h1>home page</h1>
      <h2>welcome </h2>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/burgers/new">make your own burger</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/burgers/new" element={<NewBurger />} />
      </Routes>
      <footer>&copy; dont steal my code</footer>
    </div>
  );
}

export default App;
