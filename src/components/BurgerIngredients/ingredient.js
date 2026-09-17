import { useState } from "react";
import {
    Tab,
    CurrencyIcon,
    Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";
import ingredients from "./data";

    function Ingredient({ onAdd }) {
        const [current, setCurrent] = useState("bun");

    return (
        <section className={styles.section}>
            <div className={styles.tabs}>
                <Tab value="bun" active={current === "bun"} onClick={setCurrent} className="text text_type_main-default">
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={setCurrent} className="text text_type_main-default">
                    Соусы
                </Tab>
                <Tab value="main" active={current === "main"} onClick={setCurrent} className="text text_type_main-default">
                    Начинки
                </Tab>
            </div>

            <div className={`${styles.scroll} pl-4 pr-2`}>
                {["bun", "sauce", "main"].map((type) => {
                    const title = {
                        bun: "Булки",
                        sauce: "Соусы",
                        main: "Начинки",
                    }[type];

                    return (
                        <div key={type}>
                            <h2 className="text text_type_main-medium mt-10 mb-6">{title}</h2>

                            <ul className={styles.list}>
                                {ingredients
                                    .filter((item) => item.type === type)
                                    .map((item, index) => (
                                        <li
                                            key={item._id}
                                            className={`${styles.card} p-3 mb-8`}
                                            onClick={()=>onAdd(item)}
                                        >
                                            <div className={`${styles.imageWrapper} mb-2`}>
                                                <img src={item.image} alt={item.name} />
                                                {index % 3 === 0 && (
                                                    <Counter count={1} size="default" />
                                                )}
                                            </div>

                                            <div className={`${styles.price} mb-1`}>
                                                <p className="text text_type_digits-default">{item.price}</p>
                                                <CurrencyIcon type="primary" />
                                            </div>

                                            <p className="text text_type_main-default">{item.name}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Ingredient;