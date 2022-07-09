import "./header.scss";
import logo from "../../assets/LogoMovies.png";
import { useLocation, Link, useHistory } from "react-router-dom";
import React, { useEffect, useRef } from "react";
const HeaderNav = [
  {
    display: "Home",
    Path: "/",
  },
  {
    display: "Movies",
    Path: "/movies",
  },
  {
    display: "TV Series",
    Path: "/tv",
  },
];
function Header() {
  useEffect(() => {
    const ShrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        console.log(document.body.scrollTop);
        headerRef.current.classlist.add("shrink");
      } else {
        headerRef.current.classlist.remove("shrink");
      }
      window.addEventListener("scroll", ShrinkHeader);
      return () => {
        window.removeEventListener("scroll", ShrinkHeader);
      };
    };
  }, []);
  const { pathname } = useLocation();
  console.log(useLocation().pathname);
  const active = HeaderNav.findIndex((e) => e.Path === pathname);
  console.log(active);
  const headerRef = useRef(null);
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="t-movies-logo" />
          <Link to="/">JordanBest</Link>
        </div>
        <ul className="header__nav">
          {HeaderNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.Path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
