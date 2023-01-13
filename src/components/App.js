import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // create state variable to track dark mode
  const [darkMode, setDarkMode] = useState(false);

  // toggle dark mode when button is clicked
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  // set className based on dark mode state
  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
