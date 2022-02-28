import React from "react";
import {Link} from "react-router-dom";
import {links} from "../../utils/constants";

const NoFoundPage = () => {

    return (
        <div>
            <Link to={links.LOGIN}>No Found Page. Go to Login</Link>
        </div>
    );
}

export default NoFoundPage;
