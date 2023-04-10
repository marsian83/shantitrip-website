import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import useCache, { CacheProvider } from "./contexts/cacheContext";

const cache = useCache();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider>
      {!cache.loading ? (
        <App />
      ) : (
        <div className="flex h-screen justify-center items-center italic text-5xl font-medium font-raleway">
          Loading...
        </div>
      )}
    </CacheProvider>
  </React.StrictMode>
);
