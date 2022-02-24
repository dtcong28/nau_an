import {useHistory} from "react-router-dom";
import NewFoodForm from "../components/foods/NewFoodForm";
import FoodItemDetail from "../components/foods/FoodItemDetail";
import {useEffect, useState} from "react";

function EditFoodPage() {
    const [loadedFoods, setLoadedFoods] = useState('');

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    //console.log(id);

    useEffect(() => {
        fetch('https://nhatkynauan-af1b7-default-rtdb.asia-southeast1.firebasedatabase.app/foods/' + id + ".json")
            .then(response => response.json())
            .then(data => {
                setLoadedFoods(data);
            });
    }, []);
    const history = useHistory();
    function updateFoodHandler(foodData) {
        fetch(
            "https://nhatkynauan-af1b7-default-rtdb.asia-southeast1.firebasedatabase.app/foods/" + id + ".json",
            {
                method: "PUT",
                body: JSON.stringify(foodData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Chỉnh sửa món ăn</h1>
            <NewFoodForm
                key={id}
                id={id}
                image={loadedFoods.image}
                name={loadedFoods.name}
                description={loadedFoods.description}
                onUpdateFood={updateFoodHandler}
            />
        </section>
    );
}

export default EditFoodPage;