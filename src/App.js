import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

import SwipeableTemporaryDrawer from "./components/Navigation/Sidebar";
import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./components/Home/Home"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Error404 = lazy(() => import("./components/Error404/Error404"));

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#344955",
      dark: "#232F34",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F9AA33",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SwipeableTemporaryDrawer />
      <div className="main">
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
