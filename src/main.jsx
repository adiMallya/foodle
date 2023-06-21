import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider, PostProvider } from "src/contexts";
import App from "./App.jsx";
import { makeServer } from "./server.js";

// Call make Server
makeServer();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <PostProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PostProvider>
    </Router>
  </React.StrictMode>
);
