import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsData } from '../ApiCalls';
import ShopDetailBox from '../components/ShopDetailBox';
import { Link } from 'react-router-dom';

function Shop(props) {
    const [products, setProducts] = useState([]);

    async function fetchProducts () {
        try {
            let allProducts = await productsData()
            setProducts(allProducts)
            console.log(allProducts)
        } catch(err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, []);

    function renderList() {
        console.log(products)
        const productsArray = products.map((product, idx) => {
            return (
                        <Row>
                                <Col key={idx} sm={12} md={6} lg={4} xl={3}>
                                    <Link to={`/shop/${product._id}`}>
                                        <ShopDetailBox product={product} />
                                    </Link>
                                </Col>
                        </Row>
            )
        })
        return productsArray;
    };
    return (
            <>
            <div>
                <h1>
                    Each purchase makes a difference!
                </h1>
                {renderList()}
            </div>
        </>
    )
};

export default Shop;