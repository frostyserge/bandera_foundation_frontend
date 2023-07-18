import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductData } from '../ApiCalls';

function MerchDetail() {
    const { productId } = useParams();

    console.log('THIS IS THE ID' + productId)
    const [product, setProduct] = useState(null);
    const [showEdit, setShowEdit] = useState(false);
    const [showDeleteConf, setShowDeleteConf] = useState(false);
    
    async function fetchProduct() {
        let fetchedProduct = await getProductData(productId);
        setProduct(fetchedProduct);
    }
    useEffect(() => {
        fetchProduct()
    }, []);

    return (
        <>
        {product ? 
            <Card className="my-3 p-3 rounded">
                    <Card.Img src={product.img} />
                <Card.Body>
                        <Card.Title>
                            <strong>{product.name}</strong>
                        </Card.Title>
                    <Card.Text as="h3">${product.price}</Card.Text>
                    <Card.Text as="div">
                        <div className="my-3">{product.description}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
        :
        <Card className="my-3 p-3 rounded">
            <p>Loading...</p>
        </Card>
    }
        </>
    );
}

export default MerchDetail;
