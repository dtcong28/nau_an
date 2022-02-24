import { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
//import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
    //const favoritesCtx = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Nhật ký nấu ăn</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Danh sách</Link>
                    </li>
                    <li>
                        <Link to="/add-food">Thêm mới</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;