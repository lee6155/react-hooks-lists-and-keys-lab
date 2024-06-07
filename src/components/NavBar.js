import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let nav = links.map(function(tab){
    return <a key={tab} href={`#${tab}`}>{tab}</a>
  })

  return <nav>
    {nav}
  </nav>;
}

export default NavBar;
