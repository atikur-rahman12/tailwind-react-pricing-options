import { Menu, X } from "lucide-react";
import React, { useState } from "react";

const navLinks = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = navLinks.map((route) => (
    <li key={route.id} className="px-4 lg:mr-10 hover:bg-amber-500">
      <a href={route.path}>{route.name}</a>
    </li>
  ));

  return (
    <nav className="flex justify-between items-center mx-10 mt-4 p-2">
      <span className="flex" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden mx-5"></X>
        ) : (
          <Menu className="md:hidden mx-5"></Menu>
        )}

        <ul className={`md:hidden absolute duration-1000 text-black
          ${open ? "top-8" : "-top-40"}
          bg-amber-200`}>
          {
            links
          }
        </ul>

        <h3 className="btn btn-ghost text-3xl font-bold"><a href="#">My NaveBar</a></h3>
      </span>
      <ul className="md:flex hidden">
        {
          links
        }
        </ul>
      <button className="btn btn-primary">Sign In</button>
    </nav>
  );
};

export default NavBar;
