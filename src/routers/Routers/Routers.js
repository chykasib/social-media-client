import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../Pages/About/About";
import Form from "../../Pages/Home/Form/Form";
import Home from "../../Pages/Home/Home/Home";
import PostInformations from "../../Pages/Home/PostInformations/PostInformations";
import Media from "../../Pages/Media/Media";
import Message from "../../Pages/Message/Message";
import LogIn from "../../Pages/Shared/LogIn/LogIn";
import SignUp from "../../Pages/Shared/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/', element: <Form></Form>
            },
            {
                path: '/', element: <PostInformations></PostInformations>
            },
            {
                path: '/media', element: <Media></Media>
            },
            {
                path: '/message', element: <Message></Message>
            },
            {
                path: '/login', element: <LogIn></LogIn>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/about', element: <About></About>
            }
        ]
    }
])