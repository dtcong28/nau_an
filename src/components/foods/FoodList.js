import FoodItem from "./FoodItem";
import classes from "./FoodList.module.css";

function FoodList(props) {
    return (
        <ul className={classes.list}>
            {props.foods.map((food) => (
                <FoodItem
                    key={food.id}
                    id={food.id}
                    image={food.image}
                    name={food.name}
                />
            ))}
        </ul>
    );
}
export default FoodList;