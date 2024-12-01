import React, { useEffect, useState } from "react";
import { Header } from "../components/LibraryUI/Header";
import "./IssueBook.css";

export const FindBook = () => {
    const url = "http://localhost:8080/fetchBooks";
    const [data, setData] = useState([]);
    const [values, setValues] = useState({
        bookName: "",
    });

    const fetchBooks = () => {
        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    console.log(`HTTP error! status: ${res.status}`);
                    throw new Error(`HTTP error! status: ${res.status}`);
                    const response = res.json();
                    console.log(response);
                }
                return res.json();
            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error("Error fetching books:", error);
            });
    };

    useEffect(() => {
        fetchBooks();
    }, []);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: [e.target.value] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    return (
        <div>
            <Header />
            <div className="find-book-container">
                <h1>All Book</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan="5">No books available</td>
                            </tr>
                        ) : (
                            data.map((book) => (
                                <tr key={book.bookId}>
                                    <td>{book.bookId}</td>
                                    <td>{book.bookName}</td>
                                    <td>{book.authorName}</td>
                                    <td>{book.price}</td>
                                    <td>{book.stock}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
