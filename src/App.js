import {Route, Switch} from "react-router-dom";

import ListFoodPage from "./pages/ListFood";
import DetailFoodPage from "./pages/DetailFood";
import AddFoodPage from "./pages/AddFood";
import EditFoodPage from "./pages/EditFood";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <ListFoodPage/>
                </Route>
                <Route path="/add-food">
                    <AddFoodPage/>
                </Route>
                <Route path="/detail-food">
                    <DetailFoodPage/>
                </Route>
                <Route path="/edit-food">
                    <EditFoodPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
