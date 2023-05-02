"use strict";
(() => {
    const products = [];
    const addProducts = (dato) => {
        products.push(dato);
    };
    addProducts({
        talla: 'pequeño',
        color: 'rojo',
        createdAt: new Date()
    });
    console.log(products);
});
