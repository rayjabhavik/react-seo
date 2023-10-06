
import path from "path";
import fs from "fs";

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { matchPath } from "react-router-dom";
// import App from "../../src/App";
import { Helmet } from "react-helmet";
import Main from "../src/components/Main";
import About from "../src/components/About";
import Home from "../src/components/Home";

const PORT =
  process.env.PORT || process.env.NODE_ENV === "production" ? 80 : 3006;
const app = express();

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home page",
      description: "This is the home page description.",
      ogTitle: "This is Home page",
      ogDescription: "Home page redirect to the main page",
      ogImage:
        "https://fastly.picsum.photos/id/466/300/200.jpg?hmac=ynZ9L9zmxdc_vQ-UM_FDRX4tUF-5Ogg8apdMbX1_8sU",
    }, // Import and define your Home component
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About page",
      description: "This is the about page description.",
      ogTitle: "This is About page",
      ogDescription: "About page redirect to the main page",
      ogImage:
        "https://fastly.picsum.photos/id/466/300/200.jpg?hmac=ynZ9L9zmxdc_vQ-UM_FDRX4tUF-5Ogg8apdMbX1_8sU",
    }, // Import and define your About component
  },
  {
    path: "/main",
    component: Main, // Import and define your About component
  },
  // Add more routes and components as needed
];
// console.log("hello");
app.get("*", (req, res, next) => {
  const requestedPath = req.path;
  const activeRoute = routes.find((route) => route.path === requestedPath);

  console.log("active", activeRoute);
  if (activeRoute) {
    const app = ReactDOMServer.renderToString(
      <StaticRouter location={req.url}>
        <activeRoute.component meta={activeRoute.meta} />
      </StaticRouter>
    );
    res.send(app);
  } else {
    next();
  }
});

if (process.env.NODE_ENV === "development") {
  app.use(express.static("./.ssr-server-cache"));
  app.use(express.static("./build"));
} else {
  app.use(express.static("./"));
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
