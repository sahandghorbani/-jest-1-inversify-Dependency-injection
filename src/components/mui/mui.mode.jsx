import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Child from "./Child";
export default function Muimode() {
  const theme = useTheme();
  return (
    <>
      <Typography component="h1"> {`${theme.palette.mode} mode`}</Typography>
      {/* it means even child componet that is wrapped into provideer 
        should mention its wrapper in jest render function 
        look at the Child.test.js file
      */}
      <Child />
    </>
  );
}
