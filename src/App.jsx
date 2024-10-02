import React from "react";
import { Card, Container } from "react-bootstrap";
import Name from "./name.jsx";
import Price from "./price.jsx";
import Description from "./description.jsx";
import ImageURL from "./imageURL.jsx";
import './App.css';



const firstName = "";

const welcomeImageUrl = 'https://media.istockphoto.com/id/1776871466/vector/hand-icon-with-white-fill-editable-stroke.jpg?s=1024x1024&w=is&k=20&c=Fj_h-zol5sEeF6H9c8DrZNLyUER5HlygRgh8uTX02Oc=';


const App = () => {

    return (
        <Container className="container-class">
            <Card  className="card-class">
                <Name />
                <ImageURL />
                <Description />
                <Price />
            </Card>
            <>
                {firstName ? <h3>hello {firstName}</h3> : <h3>hello there! </h3>} 
                {firstName && (
                    <img src={welcomeImageUrl} alt="welcome image" style={{width: '220px', height: '200px'}}/>
                )}
            </>
        </Container>
    )
}

export default App;