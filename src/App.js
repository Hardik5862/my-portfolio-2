import { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import SwipeableTemporaryDrawer from "./components/Navigation/Sidebar";
import Loader from "./components/Loader/Loader";
const Home = lazy(() => import("./components/Home/Home"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Error404 = lazy(() => import("./components/Error404/Error404"));

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#191919",
      dark: "#212121",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2AC17F",
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
