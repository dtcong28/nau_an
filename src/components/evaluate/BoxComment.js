import classes from "./BoxComment.module.css";
import {useState, useEffect} from "react";
import CommentForm from "./CommentForm";

function BoxComment() {
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');

    const [loadedComments, setLoadedComments] = useState([]);

    useEffect(() => {
        fetch('https://react-food-f13c8-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json'
        ).then(response => {
            return response.json();
        }).then(data => {
            const comments = [];

            for (const key in data) {
                const comment = {
                    id: key,
                    ...data[key]
                };

                comments.push(comment);
            }
            setLoadedComments(comments);

        });
    }, []);

    let countCommentsById = 0;
    for (let i = 0; i < loadedComments.length; i++) {
        if(loadedComments[i].id_food == id){
            countCommentsById = countCommentsById + 1;
        }

    }

    function addCommentHandler(commentData) {
        fetch(
            'https://react-food-f13c8-default-rtdb.asia-southeast1.firebasedatabase.app/comments.json',
            {
                method: "POST",
                body: JSON.stringify(commentData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(function (docRef) {
            //console.log("Document written with ID: ", docRef.id);
            // history.replace('/');
            // history.replace('/detail-food?id='+ id);
            window.location.reload();
        });

    }

    function getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'Chưa có bình luận';
        } else if (commentCount === 1) {
            return "1 bình luận";
        } else {
            return `${commentCount} bình luận`;
        }
    }

    function getComments(props) {
        //let countCommentById = 0;
        return props.map((prop) => {
            if (prop.id_food == id) {
                return (
                    <div className={classes.comment} key={prop.id}>
                        <p className={classes.commentHeader}>{prop.name}</p>
                        <p className={classes.commentBody}>{prop.comment}</p>
                    </div>
                );
            }
        });

    }

    const [showComments, setShowComments] = useState(false);
    const handleClick = () => setShowComments(!showComments);

    return (
        <div className={classes.commentBox}>
            <h2>Tham gia thảo luận!</h2>
            <CommentForm onAddComment={addCommentHandler}/>
            <button className={classes.commentReveal} onClick={handleClick}>
                {showComments ? 'Ẩn bình luận' : 'Hiển thị bình luận' }
            </button>
            <h3>Bình luận</h3>
            <h4 className={classes.commentCount}>
                {getCommentsTitle(countCommentsById)}
            </h4>
            <div className="commentList">{showComments ? getComments(loadedComments) : null}</div>
        </div>
    );
}

export default BoxComment;