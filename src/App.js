import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routs/Router/Router";

function App() {
  return (
    <div className=" mx-auto App max-w-[1440px] ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
