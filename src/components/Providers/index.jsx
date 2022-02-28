import {Navigate} from "react-router-dom";
import {links} from "../../utils/constants";

const PrivatRoute = ({children}) => {
    const user = localStorage.getItem('user')

    if (JSON.parse(user)?.logUserName) {
        debugger
        return children
    }

    return <Navigate to={links.LOGIN} />
}

export default PrivatRoute;
