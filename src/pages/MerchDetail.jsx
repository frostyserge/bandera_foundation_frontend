import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { productData } from '../ApiCalls';

function MerchDetail() {
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState(null);

    async function fetchProduct() {
        let fetchedProduct = await productData(id);
        setProduct(fetchedProduct);
    }
    useEffect(() => {
        fetchProduct()
    }, []);

    return (
        <>
        {product ? 
            <Card className="my-3 p-3 rounded">
                    <Card.Img href={product.img} />
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
