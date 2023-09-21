import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="flex justify-between   p-5 font-semibold">
      <h1>© 2023 Flowbite™. All Rights Reserved.</h1>

      <div className="flex gap-10">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
          About
        </NavLink>
        <NavLink
          to="/privacy-policy"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 " : ""
          }
        >
          Privacy Policy
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600" : ""
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
