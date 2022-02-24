import React, {useRef, useState} from "react";
import Card from "../ui/Card";
import classes from "./NewFoodForm.module.css";

function NewFoodForm(props) {
    const nameInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    // chua xu ly in du lieu ra
    // console.log(props.image);
    // const [inputField, setInputField] = useState({
    //     name: '',
    //     image: '',
    //     description: ''
    // })
    //
    // const inputsHandler = (event) => {
    //     setInputField({[event.target.name]: event.target.value})
    // }


    function submitHandler(event) {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const foodData = {
            name: enteredName,
            image: enteredImage,
            description: enteredDescription,
        }
        {!!(id) ? props.onUpdateFood(foodData) : props.onAddFood(foodData)}

    }

    // function onTodoChange(value) {
    //
    // }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="name">Tên món ăn</label>
                    <input type="text" required id="name" ref={nameInputRef} />

                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Ảnh</label>
                    <input type="url" required id="image" ref={imageInputRef} value={props.image}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Các bước làm</label>
                    <textarea
                        id="description" required rows="5" ref={descriptionInputRef}
                        // onChange={inputsHandler}
                        // value={inputField.description}
                    ></textarea>
                </div>
                <div className={classes.actions}>
                    {/*<button>Thêm món</button>*/}
                    <button>
                        {!!(id) ? 'Cập nhật' : 'Thêm mới'}
                    </button>
                </div>
            </form>
        </Card>
    );
}

export default NewFoodForm;