import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/About/Sobre.jsx";
import Projects from "./pages/Projects/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>
);

createRoot(document.getElementById("root2")).render(
  <StrictMode>
    <Sobre />
  </StrictMode>
);

createRoot(document.getElementById("root3")).render(
  <StrictMode>
    <Projects />
  </StrictMode>
);
