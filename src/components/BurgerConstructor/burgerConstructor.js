import { useState } from "react";
import Ingredients from "./Ingredients";
import BurgerConstructor from "./BurgerConstructor";

function App() {
    const [constructorItems, setConstructorItems] = useState([]);

    const addIngredient = (ingredient) => {
        setConstructorItems((prev) => [...prev, ingredient]);
    };

    const removeIngredient = (index) => {
        setConstructorItems((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div style={{ display: "flex", gap: "40px", justifyContent: "center" }}>
            <Ingredients onAdd={addIngredient} />
            <BurgerConstructor items={constructorItems} onRemove={removeIngredient} />
        </div>
    );
}

export default App;