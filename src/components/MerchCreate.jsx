import { createProduct } from "../ApiCalls";
import { useState } from "react";
import { Row, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";


function MerchCreate() {
    const navigate = useNavigate();


    const [productForm, setProductForm] = useState({
        name: '',
        img: '',
        price: 0.00,
        in_stock_amount: 0,
        description: '',
    });

    function handleChange(e) {
        setProductForm((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        try {
            e.preventDefault();
            console.log(productForm);
            const added = await createProduct(productForm);
            if(added) {
                navigate('/shop');
            } else {
                console.log('PRODUCT NOT CREATED');
            }
            e.target.reset()
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
                    <Form.Control type="number" onChange={handleChange} name='price' value={productForm.price} placeholder="Enter Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductInStockAmnt">
                    <Form.Label>Amount in Stock: </Form.Label>
                    <Form.Control type="number" onChange={handleChange} name='in_stock_amount' value={productForm.in_stock_amount} placeholder="How many are in stock?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="newProductDescription">
                    <Form.Label>Description: </Form.Label>
                    <Form.Control type="text" onChange={handleChange} name='description' value={productForm.description} placeholder="Enter Description" />
                </Form.Group>
                <Container>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

export default MerchCreate;