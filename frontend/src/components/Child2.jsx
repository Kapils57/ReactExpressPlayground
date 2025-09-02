import React, { useContext } from "react";

import { Counting } from "../pages/Home";
function Child2() {
  const count = useContext(Counting);

  return(
    <div>
        Child2 - useContext  : {count}
    </div>
  )
}

export default Child2;
