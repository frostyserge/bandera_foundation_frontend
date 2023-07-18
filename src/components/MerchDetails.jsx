import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; 
import { useState, useEffect } from 'react';

function MerchDetails(props) {
    const myProduct = props.product.value
    const { id } = useParams();
    console.log(id)

    // const [product, setProduct] = useState({});

    async function fetchProduct () {
        
    }
    useEffect(() => {
        fetchProduct()
    }, []);

    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/shop/`}>
                    <Card.Img href={myProduct.img} />
                </Link>
                <Card.Body>
                    <Link to={`/shop/${id}`}>
                        <Card.Title>
                            <strong>
                                {myProduct.name}
                            </strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="h3">
                        ${myProduct.price}
                    </Card.Text>
                    <Card.Text as="div">
                        <div className="my-3">
                            {myProduct.description}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
};

export default MerchDetails;