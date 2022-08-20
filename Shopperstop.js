const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8888;



app.set('views', path.join(__dirname, "views"));

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (request, response) => {

    response.render("index", { title: "Home" });

});

app.get("/About", (request, response) => {

    response.render("About", { title: "About Us" });

});

app.get("/contact", (request, response) => {

    response.render("contact", { title: "Contact" });

});

app.get("/shop", (request, response) => {

    response.render("shop", { title: "Men" });

});

app.get("/Women", (request, response) => {

    response.render("Women", { title: "Women" });

});

app.get("/Kid", (request, response) => {

    response.render("Kid", { title: "Kids" });

});

app.get("/cart", (request, response) => {

    response.render("cart", { title: "cart" });

});


app.listen(port, () => {

    console.log('Listening on http://localhost:${port}');
})