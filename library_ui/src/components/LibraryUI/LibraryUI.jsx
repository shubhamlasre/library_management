import React from "react";
import { Link } from "react-router-dom";
import book_img from "../Assets/book_shelf.jpg";
import { Header } from "./Header";
import "./LibraryUI.css";

export const LibraryUI = () => {
    // const [action, setAction] = useState("Home");

    const myStyle = {
        backgroundImage: `url(${book_img})`,
        height: "300px",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="container">
            <Header />
            <div className="service-container" style={myStyle}>
                <div className="service-button">
                    <Link to="/issueBook">Issue Book</Link>
                </div>
                <div className="service-button">
                    <Link to="/returnBook">Return Book</Link>
                </div>
                <div className="service-button">
                    <Link to="/findBook">Find Book</Link>
                </div>
            </div>
        </div>
    );
};
