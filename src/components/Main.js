import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./Navbar";

function Main() {
  return (
    <>
      {/* <HelmetProvider>
        <Helmet>
          <title>Main page</title>
          <meta name="description" content="This is main page description." />
          <link rel="canonical" href="https://example.com/main-page" />
          <meta
            property="og:image"
            content="https://popupsmart.com/blog/user/pages/354.how-do-shopify-gift-cards-work/Shopify-gift-cards-cover.jpg"
          ></meta>

          <meta property="og:title" content="This is main page " />
          <meta
            property="og:description"
            content="main page redirect to about page"
          />
        </Helmet>
      </HelmetProvider> */}
      <div className="container">
        <h3>This is main page</h3>
        <Navbar />
      </div>
    </>
  );
}

export default Main;
