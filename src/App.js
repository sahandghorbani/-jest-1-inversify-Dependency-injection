import Greeting from "./components/utils/Greeting";
import "./App.css";
import Async from "./components/utils/Async";
import AppProvider from "./providers/app.provider";
import Muimode from "./components/mui/mui.mode";
import Invesify from "./components/utils/Inversify";
import AutoCom from "./components/mui/AutoCom";
import MyTextFiled from "./components/mui/MyTextFiled";
import MySelectBox from "./components/mui/MySelectBox";
import MyRadio from "./components/mui/MyRadio";
import AccordionCom from "./components/mui/AccordionCom";
import GridCom from "./components/mui/GridCom";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Container maxWidth={'xl'}>
        <AppProvider> 
          <Invesify />
          <Muimode />
          <Greeting />
          <AutoCom />
          <MyTextFiled />
          <MySelectBox />
          <MyRadio />
          <AccordionCom />
          <GridCom />
          {/* <Async /> */}
        </AppProvider>
      </Container>
    </div>
  );
}

export default App;
