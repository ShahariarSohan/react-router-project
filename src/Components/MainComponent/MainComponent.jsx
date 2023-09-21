import { NavLink, Outlet } from "react-router-dom";

const MainComponent = () => {
  return (
    <div>
      <nav className="flex justify-between  shadow-xl p-5 font-bold">
        <h1 className="text-3xl font-bold">Amazon</h1>

        <div className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/foods"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Foods
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Dashboard
          </NavLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MainComponent;
