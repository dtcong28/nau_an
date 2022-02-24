import {useHistory} from "react-router-dom";
import NewFoodForm from "../components/foods/NewFoodForm";

function AddFoodPage() {
    const history = useHistory();

    function addFoodHandler(foodData) {
        fetch(
            "https://nhatkynauan-af1b7-default-rtdb.asia-southeast1.firebasedatabase.app/foods.json",
            {
                method: "POST",
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
            <h1>Thêm món ăn</h1>
            <NewFoodForm onAddFood={addFoodHandler}/>
        </section>
    );
}

export default AddFoodPage;