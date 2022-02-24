import {useState, useEffect} from "react";
import FoodList from "../components/foods/FoodList";

function ListFoodPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedFoods, setLoadedFoods] = useState([]);

    useEffect(() => {
        fetch('https://react-food-f13c8-default-rtdb.asia-southeast1.firebasedatabase.app/foods.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const foods = [];

            for (const key in data) {
                const food = {
                    id: key,
                    ...data[key]
                };

                foods.push(food);
            }

            setIsLoading(false);
            setLoadedFoods(foods);
        });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <h1>Danh sách món ăn</h1>
            <FoodList foods={loadedFoods}/>
        </section>
    );
}

export default ListFoodPage;