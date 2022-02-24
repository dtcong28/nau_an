import {useState, useEffect} from "react";
import FoodItemDetail from "../components/foods/FoodItemDetail";
import BoxComment from "../components/evaluate/BoxComment";
import CommentForm from "../components/evaluate/CommentForm";

function DetailFoodPage() {
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


    return (
        <section>
            <h1>Chi tiết món ăn</h1>
            <FoodItemDetail
                key ={loadedFoods.id}
                id = {id}
                image={loadedFoods.image}
                name ={loadedFoods.name}
                description ={loadedFoods.description}
            />
            <BoxComment/>
        </section>
    );
}

export default DetailFoodPage;