import { useState } from "react";
import { Button } from "@mui/material";

import Output from "./Output";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      {/* <h2>Hello World!</h2> */}
      
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <Button variant="contained"  color="primary" onClick={changeTextHandler}>Change Text!</Button>
    </div>
  );
};

export default Greeting;
