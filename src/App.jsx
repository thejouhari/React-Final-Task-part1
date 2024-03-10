import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Root from './Components/Routes/Root';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Cart from './Components/Cart/Cart';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ]

  },
]);


export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
