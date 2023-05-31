import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Muimode() {
  const theme = useTheme();
  return (
    <Typography component="h2"> {`${theme.palette.mode} mode from child`}</Typography>
  );
}
