import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navbarLinks = [
  {
    title: "Destinations",
    to: "/destinations",
  },
  {
    title: "Gallery",
    to: "/gallery",
  },
  {
    title: "Contact Us",
    to: "/contact",
  },
  {
    title: "Collaborate",
    to: "/collaborate",
  },
];

export default function Navbar() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  function checkNavFix() {
    if (window.scrollY > 32) {
      setIsNavFixed(true);
    } else {
      setIsNavFixed(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      checkNavFix();
    });
    checkNavFix();
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-screen p-page py-7 flex justify-between items-center z-[100] duration-500 border-b
      ${isNavFixed ? 'bg-background border-front' : 'bg-transparent border-back'}`}>
        <Link to="/">
          <img
            src="/header.webp"
            alt="shantitrip logo"
            className={`h-14 duration-500 ${
              isNavFixed ? "" : "brightness-0 invert"
            }`}
          />
        </Link>
        <div className="flex gap-x-8 items-center">
          {navbarLinks.map((item) => (
            <NavLink
              to={item.to}
              className={({ isActive, isPending }) =>
                `duration-500 ${isNavFixed ? "text-front" : "text-back"} ${
                  isPending
                    ? "cursor-not-allowed text-opacity-40"
                    : isActive
                    ? "text-primary"
                    : "hover:text-primary hover:saturate-200"
                }`
              }
            >
              {item.title}
            </NavLink>
          ))}
          <button className="btn-1">
            Login
            <span className="material-icons">&#xea77;</span>
          </button>
        </div>
      </nav>
    </>
  );
}
