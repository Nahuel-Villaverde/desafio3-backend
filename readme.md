# Servidor Express para Gestión de Productos

Este repositorio contiene un servidor Express para la gestión de productos. Permite acceder a una lista de productos y limitar la cantidad de productos mostrados utilizando un parámetro de consulta en la URL.

## Archivos del Proyecto

- **productManager.js:** Este archivo contiene la definición de la clase `ProductManager`, que proporciona métodos para gestionar los productos, como agregar, mostrar, actualizar y eliminar.
- **server.js:** En este archivo se crea una instancia de `ProductManager` y se agregan productos, luego se usan endpoints para mostrar todos los productos, o poner un limite.

## Uso

 - Ejecuta el archivo `server.js` para probar las funcionalidades del gestor de productos, luego en la URL, deberas poner http://localhost:8080/products para visualizar todos los productos, o http://localhost:8080/products/query?limit=3 para ver la cantidad de productos que quieras (el 3 despues de ?limit= es un numero variable).

