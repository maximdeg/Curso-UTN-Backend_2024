import express from "express";
import { engine } from "express-handlebars";

const app = express();
const PORT = 5000;

const products = [
    {
        id: 1,
        name: "TV pepe",
        price: 300,
        description: 'TV de pepe, plasma 32", negro',
    },
    {
        id: 2,
        name: "TV pepe",
        price: 1200,
        description: 'TV de pepe, plasma 34", negro',
    },
    {
        id: 3,
        name: "TV pepe",
        price: 400,
        description: 'TV de pepe, plasma 36", negro',
    },
];

// Determines the use of the public folder
app.use(express.static("./public"));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
    try {
        const response = {
            status: 200,
            message: "productos obtenidos",
            ok: true,
            data: {
                title: "TITLE",
                date: Date.now,
                valor_dolar: 1200,
                products,
            },
            layout: "products",
        };

        res.render("home", response);
    } catch (error) {
        const response = {
            status: 500,
            message: "FATAL_ERROR",
            ok: false,
            data: { detail: "Porque me pinto" },
        };
        res.render("home", response);
    }
});

app.get("/products/:product_id", (req, res) => {
    const { product_id } = req.params;
    const product = products.find(
        (product) => product.id == Number(product_id)
    );
    const response = {
        status: 200,
        message: "producto obtenido",
        ok: true,
        data: {
            product,
        },
    };
    res.render("product-detail", response);
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
