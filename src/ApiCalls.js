const URL = 'https://bandera-foundation.onrender.com/';

export async function getProductsData() {
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

export async function getProductData(id) {
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

export async function createProduct(object) {
    try {
        let newProductForm = {
            name: object.name,
            img: object.img,
            price: object.price,
            in_stock_amount: object.in_stock_amount,
            description: object.description
        }
        await fetch(URL + `shop/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProductForm)
        })
    } catch(err) {
        console.log(err)
    }
}

export async function editProduct(object, id) {
    try {
        let editedProductObj = {
            name: object.name,
            img: object.img,
            price: object.price,
            in_stock_amount: object.in_stock_amount,
            description: object.description

        }
        await fetch(URL + `shop/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedProductObj)
        })
    } catch(err) {
        console.log(err)
    }
}

export async function deleteProduct(id) {
    try {
        console.log('TRYING TO DELETE')
        const deletedProduct = await fetch(URL + `shop/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (deletedProduct) {
            return true
        }
    } catch(err) {
        console.log(err)
    }
}

