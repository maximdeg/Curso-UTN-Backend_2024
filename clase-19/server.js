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
app.use(express.urlencoded({ extended: true }));

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

app.get("/products/new", (req, res) => {
    res.render("product-form", {
        data: {
            errors: { name: null, price: null, description: null },
            form_state: {
                product: {
                    name: "Test",
                    price: "4000",
                    description: "DEFAULT DESCRIPTION",
                },
            },
        },
    });
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
            errors: {
                name: null,
                price: null,
                description: null,
            },
            form_state: {
                product,
            },
        },
    };
    res.render("product-detail", response);
});

app.get("/products/:product_id/update", (req, res) => {
    const { product_id } = req.params;
    const product = products.find(
        (product) => product.id === Number(product_id)
    );
    res.render("product-update", {
        data: {
            errors: {
                name: null,
                price: null,
                description: null,
            },
            form_state: {
                product,
            },
        },
    });
});

app.post("/products/:product_id/update", (req, res) => {
    const { product_id } = req.params;
    console.log(product_id);
    // if (!product_id)
    //     return res.json(responseBuilder(false, 404, "Product ID not found"));

    // const { title, price, category, stock } = req.body;
    // const products = await getProductsJSON();

    // const newProducts = products.map((product) => {
    //   if (product.id == product_id) {
    //     product.title = title;
    //     product.price = price;
    //     product.category = category;
    //     product.stock = stock;
    //   }
    //   return product;
    // });

    // fs.promises.writeFile("./data/data.products.json", JSON.stringify(newProducts));

    // return res.json(responseBuilder(true, 200, "Product updated"));
});

app.post("/products/new", (req, res) => {
    console.log("Form received!", req.body);
    const { name, price, description } = req.body;
    const newProduct = { name, price, description };

    const errors = {
        name: null,
        price: null,
        description: null,
    };

    if (!req.body.name.trim() || !isNaN(req.body.name.trim())) {
        errors.name = "No se completo el nombre correctamente";
    }
    if (!req.body.price.trim() || !isNaN(req.body.price.trim())) {
        errors.price = "No se completo el precio correctamente";
    }
    if (!req.body.description.trim() || !isNaN(req.body.description.trim())) {
        errors.description = "No se completo el descripcion correctamente";
    }

    let isError = Object.values(errors).some((error) => error !== null);
    if (isError)
        return res.render("product-form", {
            data: {
                errors,
                form_state: {
                    product: {
                        newProduct,
                    },
                },
            },
        });

    products.push({ newProduct, id: Date.now });

    res.redirect("/");
});

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(PORT, () => {
    console.log(`Server running on port http://127.0.0.1:${PORT}`);
});
