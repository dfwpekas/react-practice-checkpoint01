// A component that displays the description prop from the product object
import product from './product';

const Description = () => {
    return (
        <>
            <h2>Description: {product.description}</h2>
        </>
    )
}

export default Description;