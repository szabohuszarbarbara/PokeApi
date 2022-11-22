import AuthContext from "./authContext";
import {useContext} from "react";
import LoginModal from "../components/login/LoginModal";

const ProtectedRoute = ({children, allowedRole }) => {
    let { user } = useContext(AuthContext);

    if (!user) {
        return <LoginModal show={true}/>;
        }
    else {
        return children;

    }



};
export default ProtectedRoute;