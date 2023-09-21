import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
const MainComponent = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainComponent;
