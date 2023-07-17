import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Merch from '../components/Merch';
import axios from 'axios';

function Shop() {

    const [merchItem, setMerch] = useState([]);

    useEffect(() => {
        async function fetchMerch () {
            const { data } = await axios.get('/shop/')
            setMerch(data);
        }

        fetchMerch()

    }, []);
    return (
        <>
            <div>
                <h1>
                    Each purchase makes a difference!
                </h1>
                <Row>
                    {merch.map(merchItem => (
                        <Col key={merchItem._id} sm={12} md={6} lg={4} xl={3}>
                            <Merch merch={merchItem} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
};

export default Shop;