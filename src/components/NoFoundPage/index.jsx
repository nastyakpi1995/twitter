import React from "react";
import {Link} from "react-router-dom";
import {routes} from "../../utils/constants";

const NoFoundPage = () => {

    return (
        <div>
            <Link to={routes.LOGIN}>No Found Page. Go to Login</Link>
        </div>
    );
}

export default NoFoundPage;
