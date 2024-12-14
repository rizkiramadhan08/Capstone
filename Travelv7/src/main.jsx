import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Flowbite } from "flowbite-react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Flowbite
      theme={{
        theme: {
          button: {
            color: {
              customBlue: "bg-sky-500 hover:bg-sky-700 text-white",
              customRed: "bg-red-500 hover:bg-red-700 text-white",
            },
          },
        },
      }}
    >
      <App />
    </Flowbite>
  </StrictMode>
);
