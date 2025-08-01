import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext";
import { BlogProvider } from "./contexts/BlogContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </UserProvider>
  </StrictMode>,
);
