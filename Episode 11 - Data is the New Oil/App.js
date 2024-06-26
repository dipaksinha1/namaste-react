import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Error } from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import Login from "./Components/Login";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Default User",
    };
    setUserName(data.name);
  }, []);
  return (
    <>
      <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
