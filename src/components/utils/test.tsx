import React, { useEffect } from "react";

import { NotSolid } from "../../interface";
const notSolidInstance = new NotSolid();
const MyComponent = () => {
  useEffect(() => {
    notSolidInstance.sendMessage("sahand");
  }, []);

  return <div>My Component</div>;
};

export default MyComponent;
