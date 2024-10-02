import product from './product.jsx';
// A component that displays the description prop from the product object

const Description = () => {
    return (
        <>
            <h2>Description: {product.description}</h2>
        </>
    )
}

export default Description;