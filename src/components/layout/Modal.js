import classes from "./Modal.module.css";
function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onConfirm();
    }
    return(
        <div className={classes.modal} >
            <p>Are you sure?</p>
            <button className={classes.btn} onClick={cancelHandler} >Calcel</button>
            <button className={classes.btn} onClick={confirmHandler} >Confirm</button>
        </div>
    );
}
export default Modal;