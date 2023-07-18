import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { productsData } from '../ApiCalls';
import MerchDetails from '../components/MerchDetails';

function Shop(props) {
    const { productId } = useParams();
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
        const productsArray = products.map((value, idx) => {
            return (
                        <Row>
                                <Col key={idx} sm={12} md={6} lg={4} xl={3}>
                                    <MerchDetails product={{value, fetchProducts}} />
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