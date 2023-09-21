import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between  shadow-xl p-5 font-bold">
        <h1 className="text-3xl font-bold">Amazon</h1>

        <div className="flex gap-10">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600 " : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/foods"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600" : ""
            }
          >
            Foods
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-600" : ""
            }
          >
            Dashboard
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
