import React from 'react';
import Root from './Pages/Root';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import SignIn from './Pages/Sign-in';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
      /*
      {
        path:"/accommodation/:id",
        element: <Accommodation />
      } */
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
