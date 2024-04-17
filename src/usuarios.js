const ProductManager = require('./productManager.js');

// Ruta donde se almacenan los datos de los productos
const filePath = 'productos.json';

// Creo una instancia de ProductManager
const productManager = new ProductManager(filePath);


// Agrego producto 1
productManager.addProduct('Camisa', 'Camisa de algodón', 25, 'camisa.jpg', 'ZR001', 50)

//Cuando se termina de agregar el producto 1, comienza el .then
    .then(() => {

        // Agrego producto 2
        return productManager.addProduct('Pantalón', 'Pantalón vaquero', 40, 'pantalon.jpg', 'CM001', 30);
        // Pongo return al el .then para que no se ejecuten todas las operaciones simultaneamente
    })

//Cuando se termina de agregar el producto 2, comienza el .then
    .then(() => {

        // Agrego producto 3
        return productManager.addProduct('Zapatos', 'Zapatos deportivos', 60, 'zapatos.jpg', 'ZP003', 20);
    })

//Cuando se agregue el producto 3, comienza el .then
    .then(() => {

        // Obtengo el producto por su ID
        return productManager.getProductById(3);
    })

//Cuando se filtre el producto, comienza el .then
    .then(() => {

        // Modificar el producto por su ID
        const productIdToUpdate = 2; // ID del producto a modificar
        const updatedFields = { price: 50 }; // Campos actualizados

        return productManager.updateProduct(productIdToUpdate, updatedFields);
    })

//Cuando se modifique el producto por su ID, comienza el .then
    .then(async () => {

        // Eliminar el producto por su ID
        const productIdToDelete = 1; // ID del producto a eliminar
        await productManager.deleteProduct(productIdToDelete);
        return await productManager.getProducts();
        // Uso async y await para que las promesas se resuelvan en orden 
    })

//Cuando termine la ultima promesa (getProducts), comienza el .then
    .then(products => {
        console.log('Todos los productos:', products);
    })

//Si hay un error ejecuta el catch
    .catch(error => {
        console.error("Error:", error);
    });