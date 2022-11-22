import Home from "./pages/Home";
import "./App.css"
import {AuthProvider} from "./context/authContext";

function App() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
  return (
    <>
        <AuthProvider userData={user}>
            <Home />
        </AuthProvider>
    </>
  );
}

export default App;
