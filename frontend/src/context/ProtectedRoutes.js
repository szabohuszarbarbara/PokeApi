import AuthContext from "./authContext";
import {useContext} from "react";
import LoginModal from "../components/login/LoginModal";
import Home from "../pages/Home";
import {useState} from "react";

const ProtectedRoute = ({children, allowedRole }) => {
    let { user } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    if (!user) {
        return <>
            <Home />
            <LoginModal show={true} setShow={setShow} />;
            </>
        }
    else {
        return children;

    }



};
export default ProtectedRoute;