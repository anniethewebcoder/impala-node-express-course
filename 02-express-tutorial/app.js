const express = require("express");
const app = express();

const logger = require("./logger");
const authorize = require("./authorize");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use([logger, authorize]);

const { products } = require("./data");

// app.use(express.static("./public"));

app.get("/", logger, (req, res) => {});

app.get("/api/v1/test", (req, res) => {
  res.json({
    message: "It worked!",
  });
});

app.get("/api/v1/products", (req, res) => {
  const newProducts = products.map((p) => {
    const { id, name, image, price, desc } = p;
    return { id, name, image, price, desc };
  });

  res.json(newProducts);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const idToFind = parseInt(req.params.productID);
  const product = products.find((p) => p.id === idToFind);

  if (!product) {
    return res.status(404).json({
      message: "That product was not found.",
    });
  }

  res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((p) => {
      return p.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (price) {
    sortedProducts = sortedProducts.filter((p) => p.price <= price);
  }

  if (sortedProducts < 1) {
    return res.status(200).json({
      message: "No products matched your search.",
      success: true,
      data: [],
    });
  }

  res.status(200).json(sortedProducts);
});

app.get("/api/items", [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send("Items");
});

app.all("*", (req, res) => {
  res.status(404).send("Page Not Found");
});
app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
