import Card from "../ui/Card";
import classes from "./FoodItem.module.css";
import {useHistory} from "react-router-dom";
import { useState } from "react";
import Modal from "../layout/Modal";
import Backdrop from "../layout/Backdrop";

function FoodItem(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const history = useHistory();
    function handlerDelete() {
        fetch(
            "https://nhatkynauan-af1b7-default-rtdb.asia-southeast1.firebasedatabase.app/foods/" + props.id +".json",
            {
                method: 'DELETE'
            }
        ).then(() => {
            history.replace('/add-food');
            history.replace('/');
            //window.location.reload(false);
            //window.location.reload();
            //event.preventDefault();
        });
    }

    function closeModalHander() {
        setModalIsOpen(false);
    }
    function deleteHander() {
        setModalIsOpen(true);
    }
    function handlerDetail() {
        // history.push("");
        history.replace('/detail-food?id='+ props.id);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.actions}>
                    <button onClick={deleteHander}>
                        Xóa
                    </button>
                    {modalIsOpen && <Modal onCancel={closeModalHander} onConfirm={handlerDelete} />}
                    {modalIsOpen && <Backdrop onCancel={closeModalHander} />}
                    <button onClick={handlerDetail}>
                        Chi tiết
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default FoodItem;