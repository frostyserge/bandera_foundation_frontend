import { useState } from "react";


function MerchEdit(props) {
    const product = props.product;
    const setShowEdit = props.setShowEdit
    const fetchProduct = props.fetchProduct

    const [productForm, setProductForm] = useState({
        name: product.name,
        img: product.img,
        price: product.price,
        in_stock_amount: product.in_stock_amount,
        description: product.description
    });

    function handleChange(e) {
        setProductForm((currentState) => ({
            ...currentState,
            [e.target.name]: e.target.value
        }));
    };

   async function handleSubmit(e) {
        try {
            e.preventDefault()
            console.log(productForm)
            await 
        }
    }
};

export default MerchEdit;