import Card from "../ui/Card";
import classes from "./FoodItem.module.css";
import {useHistory} from "react-router-dom";

function FoodItemDetail(props) {
    const history = useHistory();
    function handlerEdit() {
        history.replace('/edit-food?id='+ props.id);
    }
    return (
        <div className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={handlerEdit}>
                        Chỉnh sửa
                    </button>
                </div>
            </Card>
        </div>
    );
}

export default FoodItemDetail;