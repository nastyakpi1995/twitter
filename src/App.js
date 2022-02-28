import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFoundRoute from "./components/layout/NotFoundRoute";
import Login from "./components/layout/auth/Login";
import {links} from "./utils/constants";
import Registration from "./components/layout/auth/Registration";
import HomePage from "./components/common/HomePage";
import PrivatRoute from "./components/Providers";

const App = () => {

    return (
        <div>
            <Routes>
                <Route path={links.LOGIN} element={<Login />} />
                <Route path={links.REGISTRATION} element={<Registration />} />
                <Route path={links.HOME} element={<PrivatRoute><HomePage /></PrivatRoute>} />
                <Route path='*' element={<NotFoundRoute />} />
            </Routes>
        </div>
    );
}

export default App;
