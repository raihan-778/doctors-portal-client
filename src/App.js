import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routs/Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className=" mx-auto App max-w-[1440px] ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
