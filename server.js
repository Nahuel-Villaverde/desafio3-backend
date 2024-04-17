const express = require('express');
const ProductManager = require('./src/productManager.js');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Instancio productManager
const productManager = new ProductManager('./products.json');


(async () => {
    await productManager.addProduct(
        'Producto 1',
        'Descripción del producto 1',
        10.99,
        'imagen1',
        'P1',
        100
    );

    await productManager.addProduct(
        'Producto 2',
        'Descripción del producto 2',
        19.99,
        'imagen2',
        'P2',
        50
    );

    await productManager.addProduct(
        'Producto 3',
        'Descripción del producto 3',
        5.99,
        'imagen3',
        'P3',
        200
    );

    await productManager.addProduct(
        'Producto 4',
        'Descripción del producto 4',
        8.99,
        'imagen4',
        'P4',
        150
    );

    await productManager.addProduct(
        'Producto 5',
        'Descripción del producto 5',
        14.99,
        'imagen5',
        'P5',
        80
    );

    console.log('Productos creados exitosamente.');
})();


// Endpoint para obtener todos los productos
app.get('/products', async (req, res) => {
    try {
        const products = await productManager.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar los productos' });
    }
});

// Endpoint para obtener x productos
app.get('/products/query', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit);
        let actualLimit;

        if (isNaN(limit) || limit <= 0) {
            actualLimit = 5;
        } else {
            actualLimit = limit;
        }

        const products = await productManager.getProducts();
        const limitedProducts = products.slice(0, actualLimit);

        res.json(limitedProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar los productos' });
    }
});

//http://localhost:8080/products/query?limit=3

app.get('/products/:pid', async (req, res) => {
    try {
        const productId = parseInt(req.params.pid);
        const product = await productManager.getProductById(productId);

        if (!product) {
            res.status(404).json({ error: 'Producto no encontrado' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al cargar el producto' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});