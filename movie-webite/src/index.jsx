import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { CommentsProvider } from "./context/CommentsProvider";
import { NotificationProvider } from "./context/NotificationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

const providers = [CategoriesProvider, CommentsProvider, NotificationProvider];
const ProvideWrapper = ({ children }) => {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProvideWrapper>
        <App />
      </ProvideWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
