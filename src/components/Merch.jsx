import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

function Merch() {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/merch/`}>
                    {/* <Card.Img href={merch.img} /> */}
                </Link>
                <Card.Body>
                    <Link to={`/merch/:id`}>
                        <Card.Title>
                            <strong>
                                {/* {merch.name} */}
                            </strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="h3">
                        {/* ${merch.price} */}
                    </Card.Text>
                    <Card.Text as="div">
                        <div className="my-3">
                            {/* {merch.description} */}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
};

export default Merch;