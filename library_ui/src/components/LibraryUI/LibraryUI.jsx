import React from "react";
import { Link } from "react-router-dom";
import book_img from "../Assets/shelf.jpg";
import { Header } from "./Header";
import "./LibraryUI.css";

export const LibraryUI = () => {
    // const [action, setAction] = useState("Home");

    const myStyle = {
        backgroundImage: `url(${book_img})`,
        height: "100%",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="container" style={myStyle}>
            <Header />
            <div className="service-container">
                <Link to="/issueBook" className="service-button">
                    Issue Book
                </Link>
                <Link to="/returnBook" className="service-button">
                    Return Book
                </Link>
                <Link to="/findBook" className="service-button">
                    Find Book
                </Link>
                <Link to="/showAllBooks" className="service-button">
                    Show All Books
                </Link>
            </div>
        </div>
    );
};
