import React, { useEffect, useState } from "react";
import planet from "../planets.png";

const Navbar = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== "") getMovie(search);
  };

  return (
    <nav className='navbar'>
      <h1>
        <img src={planet} alt='planet' />
        Movie Planet
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          placeholder='search movie'
          value={search}
          onChange={(e) => onChange(e)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
