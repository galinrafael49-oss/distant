import { useState } from "react";
import Ingredient from "./BurgerIngredients/ingredients";
import BurgerConstructor from "./BurgerConstructor";

function App() {
    const [items, setItems] = useState([]);

    const addItem = (item) => setItems((prev) => [...prev, item]);
    const removeItem = (index) =>
        setItems((prev) => prev.filter((_, i) => i !== index));

    return (
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
            <Ingredient onAdd={addItem} />
            <BurgerConstructor items={items} onRemove={removeItem} />
        </div>
    );
}

export default App;