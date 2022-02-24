import classes from "./CommentForm.module.css";
import React, {useRef, useState} from "react";
import Card from "../ui/Card";

function CommentForm(props) {
    const nameInputRef = useRef();
    const commentInputRef = useRef();

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    function submitHandler(event) {
        event.preventDefault(); // prevents page from reloading on submit
        const enteredName = nameInputRef.current.value;
        const enteredComment = commentInputRef.current.value;

        const commentData = {
            name: enteredName,
            comment: enteredComment,
            id_food: id
        }
        props.onAddComment(commentData)
    }

    return (
        <Card>
            <form className={classes.commentForm} onSubmit={submitHandler}>
                <div className={classes.commentFormFields}>
                    <input placeholder="Tên" required ref={nameInputRef}></input><br/>
                    <textarea placeholder="Bình luận" rows="4" required ref={commentInputRef}></textarea>
                </div>
                <div>
                    <button type="submit">Gửi bình luận</button>
                </div>
            </form>
        </Card>
    );
}

export default CommentForm;