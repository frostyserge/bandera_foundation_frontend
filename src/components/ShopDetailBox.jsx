import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function ShopDetailBox(props) {
    const myProduct = props.product
    console.log(myProduct);

    return (
        <>
            <Card className="my-3 p-3 rounded">
                    <Card.Img src={myProduct.img} />
                <Card.Body>
                        <Card.Title>
                            <strong>
                                {myProduct.name}
                            </strong>
                        </Card.Title>
                    <Card.Text as="h6">
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

export default ShopDetailBox;