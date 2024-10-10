import { createBrowserRouter } from "react-router-dom";
import Home from "../view/Home";
import Register from "../view/Register";
import Login from "../view/Login";
import Verification from "../view/Verification";
import ResetPassword from "../view/ResetPasword";
import Works from "../view/Works";


const router = createBrowserRouter([
    {path: "/", element: <Home /> },
    {path: "/register", element: <Register /> },
    {path: "/login", element: <Login /> },
    {path: "/verification", element: <Verification /> },
    {path: "/password", element: <ResetPassword /> },
    {path: "/works", element: <Works /> }
]);

export default router;



