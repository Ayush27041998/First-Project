import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import AboutUS from "./src/components/AboutUS";
import ContactUS from "./src/components/ContactUs";
import Error from "./src/components/Error";
import Details from "./src/components/Details";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
    {
      path:"/",
      element:<Body/>
    },
    {
      path:"/about",
      element:<AboutUS/>
    },
    {
      path:"/contactus",
      element:<ContactUS/>
    },
    {
      path:"/details/:resId",
      element:<Details/>
    }
    
  ],
    errorElement:<Error/>
  }
  
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
