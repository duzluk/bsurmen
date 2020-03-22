import React, { useEffect, useState, useRef } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

// function useHover() {
//   const ref = useRef();
//   const [hovered, setHovered] = useState(false);

//   const enter = () => setHovered(true);
//   const leave = () => setHovered(false);

//   useEffect(() => {
//     ref.current.addEventListener("mouseenter", enter);
//     ref.current.addEventListener("mouseleave", leave);
//     return () => {
//       ref.current.removeEventListener("mouseenter", enter);
//       ref.current.removeEventListener("mouseleave", leave);
//     };
//   }, [ref]);
//   return [ref, hovered];
// }

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
