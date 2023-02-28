import React from "react";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./routers";

const App = () => {
    return (
        <RouterProvider router={MainRouter} />
    );
};

export default App;
