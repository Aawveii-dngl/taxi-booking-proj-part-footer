import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      404 Not found
      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default Notfound;
