import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import ImageURL from "./imageURL";

const App = () => {
    return (
        <Container className="d-flex justify-content-center mt-5">
            <Card>
                <Name />
                <ImageURL />
                <Description />
                <Price />
            </Card>
        </Container>
    )
}

export default App;