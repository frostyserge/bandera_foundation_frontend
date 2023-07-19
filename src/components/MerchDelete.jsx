import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { deleteProduct } from '../ApiCalls';
import { useNavigate } from 'react-router-dom';

function MerchDelete(props) {
    const { productId, setShowDelete } = props;
    const navigate = useNavigate();

    async function handleDelete(e) {
        try {
            e.preventDefault();
            const deleted = await deleteProduct(productId);
            if(deleted) {
                navigate('/shop');
            } else {
                console.log('UNSUCCESSFUL DELETE');
            }
        } catch (err) {
            console.log("DELETED ERROR" + err);
            
        }
    }


    return (
        <Container>
            <h2>Do You want to Delete this Product?</h2>
            <Button onClick={handleDelete}>Yes</Button>
            <Button onClick={() => {setShowDelete(false)}}>No</Button>
        </Container>
    );
}

export default MerchDelete;
