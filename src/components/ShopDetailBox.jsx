import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'; 
import { useEffect } from 'react';
import { productData } from '../ApiCalls';

function MerchDetails(props) {
    const myProduct = props.product
    console.log(myProduct);

    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/shop/`}>
                    <Card.Img href={myProduct.img} />
                </Link>
                <Card.Body>
                    <Link to={`/shop/${myProduct}`}>
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