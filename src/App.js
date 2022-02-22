import React from "react";
import {Route, Routes} from "react-router-dom";
import NoFoundPage from "./components/NoFoundPage";
import Login from "./components/auth/Login";
import {routes} from "./utils/constants";
import Registration from "./components/auth/Registration";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={routes.LOGIN} element={<Login />} />
                <Route path={routes.REGISTRATION} element={<Registration />} />
                <Route path='*' element={<NoFoundPage />} />
            </Routes>
        </div>
    );
}

export default App;
