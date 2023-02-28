import React from 'react';
import Root from './Pages/Root';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import SignIn from './Pages/Sign-in';
import SignUp from './Pages/Sign-up';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './Pages/User';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/sign-in",
        element: <SignIn />
      },
      {
        path:"/sign-up",
        element: <SignUp />
      },
      {
        path:"/user",
        element: <User />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
