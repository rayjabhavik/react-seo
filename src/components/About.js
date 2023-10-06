import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";

function About() {
//  console.log(meta);
  return (
    <>
      {/* <HelmetProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.ogTitle} />
        <meta property="og:description" content={meta.ogDescription} />
        <meta property="og:image" content={meta.ogImage} />
        <link rel="canonical" href="https://example.com/home-page" />
      </Helmet>
      </HelmetProvider>
       */}
      <div className="container">
        <h3>This is about page</h3>
        <Navbar />
      </div>
    </>
  );
}

export default About;
