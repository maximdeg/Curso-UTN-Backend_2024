const obtenerProductos = async () => {
  const id = "1727730985465";
  const URL = `http://127.0.0.1:3000/api/products/${id}`;

  const response = await fetch(URL, { method: "GET" })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  console.log(response);
};

obtenerProductos();
