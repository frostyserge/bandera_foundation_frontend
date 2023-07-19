import { useState } from 'react';
import { editProduct } from '../ApiCalls';
import { Row, Form, Button, Container } from 'react-bootstrap';

function MerchEdit(props) {
    const {product, setShowEdit, fetchProduct} = props;

    const [productForm, setProductForm] = useState({
        name: product.name,
        img: product.img,
        price: product.price,
        in_stock_amount: product.in_stock_amount,
        description: product.description,
    });

    function handleChange(e) {
        setProductForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            console.log(productForm);
            const editedProduct = await editProduct(productForm, product._id);
            fetchProduct();
            setShowEdit(false);
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="newProductName">
                    <Form.Label>Name: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='name' value={productForm.name} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductImg">
                    <Form.Label>Image URL: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='img' value={productForm.img} placeholder="Enter Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductPrice">
                    <Form.Label>Price: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='price' value={productForm.price} placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductInStockAmnt">
                    <Form.Label>Amount in Stock: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='in_stock_amount' value={productForm.in_stock_amount} placeholder="How many are in stock?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductDescription">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='description' value={productForm.description} placeholder="Enter Description" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button style={{color: "#e21d1d",}} onClick={() => {setShowEdit(false)}}>
                    Close
                </Button>
            </Form>
        </Container>
    );
}

export default MerchEdit;
