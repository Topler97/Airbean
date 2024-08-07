
import Landing from "../Pages/Landing/Landing.jsx";
import Menu from "../Pages/Menu/Menu.jsx";
import Navet from "../Pages/Navet/Navet.jsx";
import About from "../Pages/About/About.jsx";
import Logg from "../Pages/Logg/Logg.jsx";
import Status from "../Pages/Status/Status.jsx";
import Profile from "../Pages/Profile/Profile.jsx";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavigateButton from "../Pages/NavigateButton/NavigateButton.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/navet" element={<Navet />} />
      <Route path="/status" element={<Status />} /> 
      <Route path="/logg" element={<Logg />} />
      <Route path="/profile" element={<Profile />} />
      

    </Route>
 )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;