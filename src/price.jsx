import product from './product.jsx';
// A component that displays the price prop from the product object

const Price = () => {
    return (
        <>
            <h2>Price in USD: ${product.price}</h2>
        </>
    )
}

export default Price;