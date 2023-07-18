import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductsData } from '../ApiCalls';
import ShopDetailBox from '../components/ShopDetailBox';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

function Shop(props) {
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState({});

    async function fetchProducts () {
        try {
            let products = await getProductsData()
            setProducts(products)
            console.log(products)
        } catch(err) {
            console.log(err);
            setErrors({...errors, fetch: 'No Products Available'});
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    function loaded(array) {
        console.log(products)
            return (
                <>
                    {array.map((product, idx) => {
                        return (
                            <Row>
                                    <Col key={idx}>
                                        <Link to={`${product._id}`}>
                                            <ShopDetailBox product={product} />
                                        </Link>
                                    </Col>
                            </Row>
                        )
                    })}
                </>
            )
        }
        return (
                <>
                    {products.length ? loaded(products) : <h3>Loading...</h3>}
                </>
        )
};

export default Shop;