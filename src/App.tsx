import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import useInitialize from "./hooks/useInitialize";
import { useStyles } from "./App.style";
import { useGlobalData } from "./contexts/globalDataContext";
import Search from "./pages/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
]);

function App() {
  const { suffixTree, hash } = useInitialize();
  const globalData = useGlobalData();
  const classes = useStyles();

  useEffect(() => {
    globalData?.setNewData?.({ suffixTree, hash });
  }, []);

  return (
    <div className={classes.appContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
