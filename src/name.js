// A component that displays the name prop from the product object

import { product } from "./product";

const Name = () => {
    return (
        <>
            <h2>Name: {product.name}</h2>
        </>
    )
}

export default Name;