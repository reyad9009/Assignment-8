import React from 'react';

const WishList = ({wishList}) => {
    const {product_id} = wishList;
    return (
        <div>
            <h1>hello {product_id}</h1>
        </div>
    );
};

export default WishList;