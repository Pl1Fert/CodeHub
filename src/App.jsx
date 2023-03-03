import React from "react";
import { RouterProvider } from "react-router-dom";

import { LoaderSpinner } from "./components";
import { MainRouter } from "./routers";

const App = () => {
    return (
        <RouterProvider router={MainRouter} fallbackElement={<LoaderSpinner/>}/>
    );
};

export default App;
