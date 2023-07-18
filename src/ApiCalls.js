const URL = 'http://127.0.0.1:8000/';

export async function productsData() {
    try {
        let products = await fetch(URL + `shop/`)
        const parsedProducts = await products.json()
        console.log(products)
        console.log(parsedProducts)
        return parsedProducts
    } catch(err) {
        console.log(err);
        return []
    }
};

export async function productData(id) {
    try {
        let product = await fetch(URL + `shop/${id}`)
        product = await product.json()
        console.log('PRODUCT_DATA' + product)
        return product
    } catch(err) {
        console.log(err);
        return null
    }
};


