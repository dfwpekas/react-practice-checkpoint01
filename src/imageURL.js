// A component that displays the imageURL prop from the product object

import { product } from "./product";

const ImageURL = () => {
    return (
        <>
            <img src={product.imageURL} alt="AK-47" style={{width: '200px',  height: '200px'}}/>

        </>
    )
}


export default ImageURL;