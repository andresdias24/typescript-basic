(()=>{

    type talla = 'pequeño' | 'medio' | 'largo';
    type color = 'rojo' | 'azul' | 'verde';

    type product = {
      talla?: talla;
      color: string;
      createdAt: Date;
    }

    const products: product[] = []

    const addProducts = (dato: product) => {
      products.push(dato)
    }

    addProducts({
      talla: 'pequeño',
      color: 'rojo',
      createdAt: new Date()
    })

    console.log(products)

})
