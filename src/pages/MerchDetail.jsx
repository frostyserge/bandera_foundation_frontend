import { Card, Spinner, Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deleteProduct, getProductData } from '../ApiCalls';
import MerchEdit from '../components/MerchEdit';
import MerchDelete from '../components/MerchDelete';

function MerchDetail() {
    const { productId } = useParams();

    console.log('THIS IS THE ID' + productId);
    const [product, setProduct] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    async function fetchProduct() {
        let fetchedProduct = await getProductData(productId);
        setProduct(fetchedProduct);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    const loaded = () => {
        return (
            <Card className="my-3 p-3 rounded">
                <Card.Img src={product.img} />
                {showEdit ? (
                    <MerchEdit product={product} setShowEdit={setShowEdit} fetchProduct={fetchProduct}/>
                ) : (
                    <Card.Body>
                        <Card.Title>
                            <strong>{product.name}</strong>
                        </Card.Title>
                        <Card.Text as="h3">${product.price}</Card.Text>
                        <Card.Text as="h6">
                            In Stock: {product.in_stock_amount}
                        </Card.Text>
                        <Card.Text as="div">
                            <div className="my-3">{product.description}</div>
                        </Card.Text>
                        <Button onClick={() => {setShowEdit(true)}}>Edit</Button>
                    </Card.Body>
                )}

                {showDelete ? (
                    <MerchDelete
                        productId={productId}
                        setShowDelete={setShowDelete}
                    />
                ) : (
                    <Button
                        onClick={() => {
                            setShowDelete(true);
                        }}
                    >
                        Delete
                    </Button>
                )}
            </Card>
        );
    };
    return product ? (
        loaded()
    ) : (
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
}

export default MerchDetail;
