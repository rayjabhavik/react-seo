const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const fs = require("fs");

app.get("/", function (request, response) {
    console.log("Home page visited!");
    const filePath = path.resolve(__dirname, "./build", "index.html");

    // read in the index.html file
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }

        // replace the special strings with server generated strings
        data = data.replace(/\$OG_TITLE/g, "Home page");
        data = data.replace(/\$OG_DESCRIPTION/g, "home page redirect to main page");
        let result = data.replace(
            /\$OG_IMAGE/g,
            "https://fastly.picsum.photos/id/466/300/200.jpg?hmac=ynZ9L9zmxdc_vQ-UM_FDRX4tUF-5Ogg8apdMbX1_8sU"
        );
        response.send(result);
    });
});

app.get("/about", function (request, response) {
    console.log("About page visited!");
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, "About page");
        data = data.replace(
            /\$OG_DESCRIPTION/g,
            "decription page redirect home page"
        );
        let result = data.replace(
            /\$OG_IMAGE/g,
            "https://media.istockphoto.com/id/1144188586/photo/about-us-word-and-idea.jpg?s=612x612&w=0&k=20&c=uIxq86LADw2VZ55t3pfkSjkB7Q_nHABAl28DNDBCnPs="
        );
        response.send(result);
    });
});

app.get("/main", function (request, response) {
    console.log("main page visited!");
    const filePath = path.resolve(__dirname, "./build", "index.html");
    fs.readFile(filePath, "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        data = data.replace(/\$OG_TITLE/g, "Main page");
        data = data.replace(
            /\$OG_DESCRIPTION/g,
            "main page redirect to about page"
        );
        let result = data.replace(
            /\$OG_IMAGE/g,
            "https://popupsmart.com/blog/user/pages/354.how-do-shopify-gift-cards-work/Shopify-gift-cards-cover.jpg"
        );
        response.send(result);
    });
});

app.use(express.static(path.resolve(__dirname, "./build")));

app.get("*", function (request, response) {
    const filePath = path.resolve(__dirname, "./build", "index.html");
    response.sendFile(filePath);
});

app.listen(port, () => console.log(`Listening on port ${port}`));